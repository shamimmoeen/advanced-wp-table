import { Button, Flex, FlexItem, Modal, Notice } from '@wordpress/components';
import { deleteTable } from '../../api';
import { showSuccessNotice } from '../../utils';
import { StateContext } from '../App';

const { useContext, useState } = wp.element;
const { __ } = wp.i18n;

const TableDeleteDialog = () => {
	const { state, dispatch } = useContext( StateContext );
	const { tables, tableDeleteDialog } = state;
	const { status, id } = tableDeleteDialog;
	const [ loading, setLoading ] = useState( false );
	const [ error, setError ] = useState( null );

	const onHandleCancel = () => {
		if ( loading ) {
			return;
		}

		setError( null );
		dispatch( { type: 'UNSET_TABLE_DELETE_DIALOG' } );
	};

	const onHandleDelete = () => {
		setLoading( true );
		setError( null );

		deleteTable( id )
			.then( () => {
				setLoading( false );
				dispatch( { type: 'UPDATE_TABLES', payload: tables.filter( ( item ) => item.id !== id ) } );
				dispatch( { type: 'UNSET_TABLE_DELETE_DIALOG' } );
				showSuccessNotice( __( 'Table deleted successfully', 'advanced-wp-table' ) );
				wp.a11y.speak( __( 'Table deleted', 'advanced-wp-table' ), 'assertive' );
			} )
			.catch( () => {
				setLoading( false );
				setError( __( 'Oops, there was a problem when deleting the table', 'advanced-wp-table' ) );
				wp.a11y.speak( __( 'Error deleting table', 'advanced-wp-table' ), 'assertive' );
			} );
	};

	if ( ! status ) {
		return null;
	}

	return (
		<Modal
			title={ __( 'Delete table', 'advanced-wp-table' ) }
			onRequestClose={ onHandleCancel }
			isDismissible={ false }
			shouldCloseOnEsc={ false }
			shouldCloseOnClickOutside={ false }
		>
			{ error && (
				<div style={ { marginBottom: '16px' } }>
					<Notice status={ 'error' } isDismissible={ false }>
						{ error }
					</Notice>
				</div>
			) }
			<p>
				{ __( "This action is permanent and can't be undone.", 'advanced-wp-table' ) }
			</p>
			<Flex justify={ 'flex-end' }>
				<FlexItem>
					<Button variant={ 'tertiary' } disabled={ loading } onClick={ onHandleCancel }>
						{ __( 'Cancel', 'advanced-wp-table' ) }
					</Button>
				</FlexItem>
				<FlexItem>
					<Button
						variant={ 'primary' }
						isDestructive
						isBusy={ loading }
						disabled={ loading }
						onClick={ onHandleDelete }
					>
						{ __( 'Delete permanently', 'advanced-wp-table' ) }
					</Button>
				</FlexItem>
			</Flex>
		</Modal>
	);
};

export default TableDeleteDialog;
