import { Button, Flex, FlexItem, Modal } from '@wordpress/components';
import { deleteTable } from '../../utils/table';
import { toastError, toastSuccess } from '../../utils/utils';
import { StateContext } from '../App';

const { useContext } = wp.element;
const { __, _n, sprintf } = wp.i18n;

const BulkDeleteDialog = () => {
	const { state, dispatch } = useContext( StateContext );
	const { tables, bulkDeleteDialog } = state;
	const { status, ids } = bulkDeleteDialog;
	const total = state.total;
	const count = ids.length;

	const onHandleCancel = () => {
		dispatch( { type: 'UNSET_BULK_DELETE_DIALOG' } );
	};

	const onHandleDelete = () => {
		const oldTables = [ ...tables ];
		const oldTotal = total;
		const newTables = oldTables.filter( ( item ) => ! ids.includes( item.id ) );
		const newTotal = total - count;
		const newTotalPages = Math.ceil( newTotal / state.perPage );

		dispatch( { type: 'UPDATE_TOTAL', payload: newTotal } );
		dispatch( { type: 'UPDATE_TABLES', payload: newTables } );
		dispatch( { type: 'UNSET_BULK_DELETE_DIALOG' } );

		toastSuccess(
			sprintf(
				/* translators: %d: number of deleted tables. */
				_n(
					'%d table deleted successfully',
					'%d tables deleted successfully',
					count,
					'advanced-wp-table'
				),
				count
			)
		);

		if ( wp.a11y && wp.a11y.speak ) {
			wp.a11y.speak(
				sprintf(
					/* translators: %d: number of deleted tables. */
					_n( '%d table deleted', '%d tables deleted', count, 'advanced-wp-table' ),
					count
				),
				'assertive'
			);
		}

		Promise.all( ids.map( ( id ) => deleteTable( id ) ) )
			.then( () => {
				const { currentPage, perPage } = state;

				if ( currentPage >= newTotalPages && newTotalPages > 0 ) {
					dispatch( {
						type: 'PAGINATE_TABLES',
						payload: {
							offset: ( newTotalPages - 1 ) * perPage,
							currentPage: newTotalPages - 1,
						},
					} );
				}
			} )
			.catch( () => {
				dispatch( { type: 'UPDATE_TOTAL', payload: oldTotal } );
				dispatch( { type: 'UPDATE_TABLES', payload: oldTables } );
				toastError(
					__( 'Oops, there was a problem when deleting the tables', 'advanced-wp-table' )
				);
			} );
	};

	if ( ! status ) {
		return null;
	}

	return (
		<Modal
			title={ __( 'Delete tables', 'advanced-wp-table' ) }
			onRequestClose={ onHandleCancel }
		>
			<p>
				{ sprintf(
					/* translators: %d: number of tables to delete. */
					_n(
						'You are about to delete %d table. This action is permanent and can\'t be undone.',
						'You are about to delete %d tables. This action is permanent and can\'t be undone.',
						count,
						'advanced-wp-table'
					),
					count
				) }
			</p>
			<Flex justify={ 'flex-end' }>
				<FlexItem>
					<Button variant={ 'secondary' } onClick={ onHandleCancel }>
						{ __( 'Cancel', 'advanced-wp-table' ) }
					</Button>
				</FlexItem>
				<FlexItem>
					<Button variant={ 'primary' } isDestructive onClick={ onHandleDelete }>
						{ __( 'Delete', 'advanced-wp-table' ) }
					</Button>
				</FlexItem>
			</Flex>
		</Modal>
	);
};

export default BulkDeleteDialog;
