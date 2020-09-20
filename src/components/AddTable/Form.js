import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';

import { postTable, prepareTable, validateTable } from '../../utils/table';
import { dismissToasts, toastError, toastSuccess } from '../../utils/utils';
import { clearInput, setInput } from '../../store/reducers/add-table';
import { setFormLoading, setView, unsetFormLoading } from '../../store/reducers/ui';
import { TABLE, TABLES } from '../../utils/views';
import { setTable } from '../../store/reducers/table';
import { setTotal } from '../../store/reducers/tables';

const Form = () => {
	const dispatch = useDispatch();
	const tablesState = useSelector( state => state.tables );
	const formLoading = useSelector( state => state.ui.formLoading );
	const newTableData = useSelector( state => state.addTable );
	const { total } = tablesState;
	const { title, sizeOfRows, sizeOfColumns } = newTableData;

	const onHandleInputChange = ( e ) => {
		dispatch( setInput( { name: e.target.name, value: e.target.value } ) );
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
				dispatch( unsetFormLoading() );
				dispatch( setTable( newTable ) );
				dispatch( setView( TABLE ) );
				dispatch( setTotal( total + 1 ) );
				dispatch( clearInput() );

				toastSuccess( __( 'Table created successfully', 'advanced-wp-table' ) );
			} )
			.catch( () => {
				dispatch( unsetFormLoading() );

				toastError( __( 'Oops, there was a problem when creating the table', 'advanced-wp-table' ) );
			} );
	};

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
						onChange={ onHandleInputChange }
						value={ sizeOfColumns }
					/>
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
