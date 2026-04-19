import { Button, Flex, FlexItem, Modal, Notice, TextControl } from '@wordpress/components';
import { postTable, prepareTable } from '../../api';
import { showSuccessNotice } from '../../utils';
import { StateContext } from '../App';

const { useContext, useState } = wp.element;
const { __ } = wp.i18n;

const NewTableDialog = () => {
	const { state, dispatch } = useContext( StateContext );
	const { tables, creatingTable, newTableData, newTableDialog } = state;
	const { title, sizeOfRows, sizeOfColumns } = newTableData;
	const [ error, setError ] = useState( null );

	const onHandleClose = () => {
		if ( creatingTable ) {
			return;
		}

		setError( null );
		dispatch( { type: 'CLEAR_NEW_TABLE_DATA' } );
		dispatch( { type: 'UNSET_NEW_TABLE_DIALOG' } );
	};

	const onHandleInputChange = ( name, value ) => {
		dispatch( { type: 'SET_INPUT', payload: { name, value } } );
	};

	const onHandleSubmit = ( e ) => {
		e.preventDefault();
		setError( null );

		dispatch( { type: 'SET_CREATING_TABLE' } );

		const parsedTableData = prepareTable( newTableData );

		postTable( parsedTableData )
			.then( ( newTable ) => {
				dispatch( { type: 'UNSET_CREATING_TABLE' } );
				dispatch( { type: 'UNSET_NEW_TABLE_DIALOG' } );
				dispatch( { type: 'CLEAR_NEW_TABLE_DATA' } );
				dispatch( { type: 'UPDATE_TABLES', payload: [ newTable, ...tables ] } );
				showSuccessNotice( __( 'Table created successfully', 'advanced-wp-table' ) );
				wp.a11y.speak( __( 'Table created', 'advanced-wp-table' ) );
			} )
			.catch( () => {
				dispatch( { type: 'UNSET_CREATING_TABLE' } );
				setError( __( 'Oops, there was a problem when creating the table', 'advanced-wp-table' ) );
				wp.a11y.speak( __( 'Error creating table', 'advanced-wp-table' ), 'assertive' );
			} );
	};

	if ( ! newTableDialog ) {
		return null;
	}

	return (
		<Modal
			title={ __( 'Add New Table', 'advanced-wp-table' ) }
			onRequestClose={ onHandleClose }
			isDismissible={ false }
			shouldCloseOnClickOutside={ ! creatingTable }
			shouldCloseOnEsc={ ! creatingTable }
			style={ { width: '480px' } }
		>
			<form onSubmit={ onHandleSubmit }>
				{ error && (
					<div style={ { marginBottom: '16px' } }>
						<Notice status={ 'error' } isDismissible={ false }>
							{ error }
						</Notice>
					</div>
				) }
				<TextControl
					label={ __( 'Title', 'advanced-wp-table' ) }
					placeholder={ __( 'Give a title', 'advanced-wp-table' ) }
					value={ title }
					required
					autoFocus
					onChange={ ( value ) => onHandleInputChange( 'title', value ) }
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				/>
				<Flex gap={ 4 } style={ { marginTop: '16px' } }>
					<FlexItem isBlock>
						<TextControl
							label={ __( 'Rows', 'advanced-wp-table' ) }
							type={ 'number' }
							min={ 1 }
							required
							value={ sizeOfRows }
							onChange={ ( value ) => onHandleInputChange( 'sizeOfRows', value ) }
							__next40pxDefaultSize
							__nextHasNoMarginBottom
						/>
					</FlexItem>
					<FlexItem isBlock>
						<TextControl
							label={ __( 'Columns', 'advanced-wp-table' ) }
							type={ 'number' }
							min={ 1 }
							required
							value={ sizeOfColumns }
							onChange={ ( value ) => onHandleInputChange( 'sizeOfColumns', value ) }
							__next40pxDefaultSize
							__nextHasNoMarginBottom
						/>
					</FlexItem>
				</Flex>
				<Flex justify={ 'flex-end' } style={ { marginTop: '24px' } }>
					<FlexItem>
						<Button
							variant={ 'secondary' }
							disabled={ creatingTable }
							onClick={ onHandleClose }
						>
							{ __( 'Cancel', 'advanced-wp-table' ) }
						</Button>
					</FlexItem>
					<FlexItem>
						<Button
							type={ 'submit' }
							variant={ 'primary' }
							isBusy={ creatingTable }
							disabled={ creatingTable }
						>
							{ __( 'Create', 'advanced-wp-table' ) }
						</Button>
					</FlexItem>
				</Flex>
			</form>
		</Modal>
	);
};

export default NewTableDialog;
