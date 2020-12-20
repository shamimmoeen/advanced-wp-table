import React, { useEffect, useRef } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';
import _ from 'lodash';
import { Tooltip } from '@wordpress/components';

import { postTable, prepareTable, validateTable } from '../../utils/table';
import { dismissToasts, toastError, toastSuccess } from '../../utils/utils';
import { clearInput, setInput } from '../../store/reducers/add-table';
import { setFormLoading, setView, unsetFormLoading } from '../../store/reducers/ui';
import { TABLE, TABLES } from '../../utils/views';
import { setTable } from '../../store/reducers/table';
import { setCache, setCurrentPage, setOffset, setTables, setTotal, setTotalPages } from '../../store/reducers/tables';

const Form = () => {
	const dispatch = useDispatch();
	const titleRef = useRef();
	const tablesState = useSelector( state => state.tables );
	const formLoading = useSelector( state => state.ui.formLoading );
	const newTableData = useSelector( state => state.addTable );
	const { total, perPage, cache } = tablesState;
	const { title, sizeOfRows, sizeOfColumns, type } = newTableData;

	const onHandleInputChange = ( e ) => {
		const name = e.target.name;
		let value = e.target.value;

		if ( 'sizeOfRows' === name && value < 0 ) {
			value = 0;
		}

		if ( 'sizeOfColumns' === name && value < 0 ) {
			value = 0;
		}

		dispatch( setInput( { name, value } ) );
	};

	const onHandleCancelSubmission = () => {
		dispatch( setView( TABLES ) );
		dismissToasts();
	};

	const onHandleFormSubmission = ( e ) => {
		e.preventDefault();

		try {
			validateTable( newTableData );
		} catch ( err ) {
			toastError( err.message );
			return;
		}

		dispatch( setFormLoading() );

		postTable( prepareTable( newTableData ) )
			.then( ( newTable ) => {
				const newTotal = total + 1;
				const newTotalPages = Math.ceil( newTotal / perPage );

				const newCache = [ newTable, ...cache ];
				const chunked = _.chunk( newCache, perPage );
				const tables = chunked[ 0 ];

				batch( () => {
					dispatch( setTotal( newTotal ) );
					dispatch( setTotalPages( newTotalPages ) );
					dispatch( setOffset( 0 ) );
					dispatch( setCurrentPage( 0 ) );
					dispatch( setTables( tables ) );
					dispatch( setCache( tables ) );

					dispatch( setTable( newTable ) );

					dispatch( unsetFormLoading() );
					dispatch( clearInput() );

					dispatch( setView( TABLE ) );
				} );

				toastSuccess( __( 'Table created successfully', 'advanced-wp-table' ) );
			} )
			.catch( () => {
				dispatch( unsetFormLoading() );

				toastError( __( 'Oops, there was a problem when creating the table', 'advanced-wp-table' ) );
			} );
	};

	useEffect( () => {
		if ( titleRef ) {
			titleRef.current.focus();
		}
	}, [] );

	let formClasses = 'advanced-wp-table-new-table-form';

	if ( formLoading ) {
		formClasses += ' loading';
	}

	return (
		<form className={ formClasses } onSubmit={ onHandleFormSubmission }>
			<div className="advanced-wp-table-form-item">
				<label htmlFor="title">{ __( 'Title', 'advanced-wp-table' ) }</label>
				<div className={ 'advanced-wp-table-form-input-wrapper' }>
					<input
						type="text"
						id={ 'title' }
						name={ 'title' }
						placeholder={ __( 'Give a title', 'advanced-wp-table' ) }
						onChange={ onHandleInputChange }
						value={ title }
						ref={ titleRef }
					/>
				</div>
			</div>
			<div className="advanced-wp-table-form-item">
				<label htmlFor="no-of-rows">{ __( 'How many rows?', 'advanced-wp-table' ) }</label>
				<div className={ 'advanced-wp-table-form-input-wrapper' }>
					<input
						type="number"
						id={ 'no-of-rows' }
						name={ 'sizeOfRows' }
						placeholder={ __( 'Size of rows', 'advanced-wp-table' ) }
						onChange={ onHandleInputChange }
						value={ sizeOfRows }
					/>
				</div>
			</div>
			<div className="advanced-wp-table-form-item">
				<label htmlFor="no-of-columns">{ __( 'How many columns?', 'advanced-wp-table' ) }</label>
				<div className={ 'advanced-wp-table-form-input-wrapper' }>
					<input
						type="number"
						id={ 'no-of-columns' }
						name={ 'sizeOfColumns' }
						placeholder={ __( 'Size of columns', 'advanced-wp-table' ) }
						onChange={ onHandleInputChange }
						value={ sizeOfColumns }
					/>
				</div>
			</div>
			<div className="advanced-wp-table-form-item">
				<label htmlFor="layout-table">{ __( 'Type?', 'advanced-wp-table' ) }</label>
				<div className={ 'advanced-wp-table-form-input-wrapper advanced-wp-table-form-checkbox-wrapper' }>
					<div>
						<input
							type="radio"
							name="type"
							id="layout-table"
							value={ 'layout' }
							checked={ 'layout' === type }
							onChange={ onHandleInputChange }
						/>
						<label htmlFor={ 'layout-table' }>
							{ __( 'Layout Table', 'advanced-wp-table' ) }
						</label>
						<Tooltip
							text={ __( 'In layout table you can use gutenberg editor.', 'advanced-wp-table' ) }
							position={ 'top center' }
						>
							<span className={ 'dashicons dashicons-editor-help' } />
						</Tooltip>
					</div>
					<div>
						<input
							type="radio"
							name="type"
							id="data-table"
							value={ 'data' }
							checked={ 'data' === type }
							onChange={ onHandleInputChange }
						/>
						<label htmlFor={ 'data-table' }>
							{ __( 'Data Table', 'advanced-wp-table' ) }
						</label>
						<Tooltip
							text={ __( 'Data Table is normally used to show data. You can use basic markups.', 'advanced-wp-table' ) }
							position={ 'top center' }
						>
							<span className={ 'dashicons dashicons-editor-help' } />
						</Tooltip>
					</div>
				</div>
			</div>

			<div className={ 'advanced-wp-table-form-buttons' }>
				<button className={ 'button button-primary' } type={ 'submit' } onClick={ onHandleFormSubmission }>
					{ __( 'Create', 'advanced-wp-table' ) }
				</button>
				{ ` ` }
				<button className={ 'button' } onClick={ onHandleCancelSubmission }>
					{ __( 'Cancel', 'advanced-wp-table' ) }
				</button>
			</div>
		</form>
	);
};

export default Form;
