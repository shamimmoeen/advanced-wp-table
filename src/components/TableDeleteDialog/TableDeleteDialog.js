import { Button, Flex, FlexItem, Modal } from '@wordpress/components';
import { deleteTable } from '../../utils/table';
import { toastError, toastSuccess } from '../../utils/utils';

import { StateContext } from '../App';

const { useContext } = wp.element;
const { __ } = wp.i18n;

const TableDeleteDialog = () => {
	const { state, dispatch } = useContext(StateContext);
	const { tables, tableDeleteDialog } = state;
	const { status, id } = tableDeleteDialog;
	const total = state.total;

	const onHandleCancel = () => {
		dispatch({ type: 'UNSET_TABLE_DELETE_DIALOG' });
	};

	const onHandleDelete = () => {
		const oldTables = [...tables];
		const newTables = oldTables.filter((item) => id !== item.id);
		const { currentPage, perPage } = state;
		const newTotal = total - 1;
		const newTotalPages = Math.ceil(newTotal / perPage);

		dispatch({ type: 'UPDATE_TOTAL', payload: newTotal });
		dispatch({ type: 'UPDATE_TABLES', payload: newTables });
		dispatch({ type: 'UNSET_TABLE_DELETE_DIALOG' });
		toastSuccess(__('Table deleted successfully', 'advanced-wp-table'));

		if ( wp.a11y && wp.a11y.speak ) {
			wp.a11y.speak( __( 'Table deleted', 'advanced-wp-table' ), 'assertive' );
		}

		deleteTable(id)
			.then(() => {
				// Go back one page if current page is now empty, otherwise stay.
				if (currentPage >= newTotalPages && newTotalPages > 0) {
					dispatch({
						type: 'PAGINATE_TABLES',
						payload: {
							offset: (newTotalPages - 1) * perPage,
							currentPage: newTotalPages - 1,
						},
					});
				}
			})
			.catch((err) => {
				// eslint-disable-next-line no-console
				console.log(err.message);

				dispatch({ type: 'UPDATE_TOTAL', payload: total });
				dispatch({ type: 'UPDATE_TABLES', payload: oldTables });
				toastError(
					__(
						'Oops, there was a problem when deleting the table',
						'advanced-wp-table'
					)
				);
			});
	};

	if (!status) {
		return null;
	}

	return (
		<Modal
			title={__('Delete table', 'advanced-wp-table')}
			onRequestClose={onHandleCancel}
		>
			<p>
				{__(
					"This action is permanent and can't be undone.",
					'advanced-wp-table'
				)}
			</p>
			<Flex justify={'flex-end'}>
				<FlexItem>
					<Button variant={'secondary'} onClick={onHandleCancel}>
						{__('Cancel', 'advanced-wp-table')}
					</Button>
				</FlexItem>
				<FlexItem>
					<Button
						variant={'primary'}
						isDestructive
						onClick={onHandleDelete}
					>
						{__('Delete', 'advanced-wp-table')}
					</Button>
				</FlexItem>
			</Flex>
		</Modal>
	);
};

export default TableDeleteDialog;
