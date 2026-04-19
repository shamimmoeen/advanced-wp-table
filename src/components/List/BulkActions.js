import { Button } from '@wordpress/components';
import { StateContext } from '../App';

const { useContext, useEffect, useState } = wp.element;
const { __ } = wp.i18n;

const BulkActions = () => {
	const { state, dispatch } = useContext( StateContext );
	const { selectedTableIds } = state;
	const [ bulkAction, setBulkAction ] = useState( '' );

	const hasSelection = selectedTableIds.length > 0;

	useEffect( () => {
		if ( ! hasSelection ) {
			setBulkAction( '' );
		}
	}, [ hasSelection ] );

	const onApply = () => {
		if ( 'delete' === bulkAction && hasSelection ) {
			dispatch( {
				type: 'SET_BULK_DELETE_DIALOG',
				payload: { status: true, ids: [ ...selectedTableIds ] },
			} );
		}
	};

	return (
		<div className={ 'advanced-wp-table-bulk-actions' }>
			<select
				value={ bulkAction }
				onChange={ ( e ) => setBulkAction( e.target.value ) }
				aria-label={ __( 'Bulk actions', 'advanced-wp-table' ) }
			>
				<option value="">{ __( 'Bulk actions', 'advanced-wp-table' ) }</option>
				<option value="delete">{ __( 'Delete', 'advanced-wp-table' ) }</option>
			</select>
			<Button
				variant={ 'secondary' }
				size={ 'compact' }
				disabled={ ! bulkAction || ! hasSelection }
				onClick={ onApply }
			>
				{ __( 'Apply', 'advanced-wp-table' ) }
			</Button>
		</div>
	);
};

export default BulkActions;
