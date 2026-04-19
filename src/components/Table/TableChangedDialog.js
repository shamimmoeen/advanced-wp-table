import { Button, Flex, FlexItem, Modal } from '@wordpress/components';
import { StateContext } from '../App';

const { useContext } = wp.element;
const { __ } = wp.i18n;

const TableChangedDialog = () => {
	const { state, dispatch } = useContext( StateContext );
	const { tableChangedDialog } = state;
	const { status, callbackCancel, callbackLeave } = tableChangedDialog;

	const onHandleCancel = () => {
		if ( callbackCancel ) {
			callbackCancel();
		}

		dispatch( { type: 'UNSET_TABLE_CHANGED_DIALOG' } );
	};

	const onHandleLeave = () => {
		if ( callbackLeave ) {
			callbackLeave();
		}

		dispatch( { type: 'UNSET_TABLE_CHANGED_DIALOG' } );
	};

	if ( ! status ) {
		return null;
	}

	return (
		<Modal
			title={ __( 'Unsaved changes', 'advanced-wp-table' ) }
			onRequestClose={ onHandleCancel }
		>
			<p>
				{ __( 'The changes you made will be lost if you leave this.', 'advanced-wp-table' ) }
			</p>
			<Flex justify={ 'flex-end' }>
				<FlexItem>
					<Button variant={ 'secondary' } onClick={ onHandleCancel }>
						{ __( 'Keep editing', 'advanced-wp-table' ) }
					</Button>
				</FlexItem>
				<FlexItem>
					<Button
						variant={ 'primary' }
						isDestructive
						onClick={ onHandleLeave }
					>
						{ __( 'Discard', 'advanced-wp-table' ) }
					</Button>
				</FlexItem>
			</Flex>
		</Modal>
	);
};

export default TableChangedDialog;
