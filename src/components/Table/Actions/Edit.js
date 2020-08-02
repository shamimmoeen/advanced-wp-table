import { dismissToasts } from '../../../utils/utils';
import { StateContext } from '../../App';

const { useContext, React } = wp.element;
const { __ } = wp.i18n;

const Edit = ( { i, j } ) => {
	const { state, dispatch } = useContext( StateContext );
	const { table } = state;
	const { advanced_wp_table_data: tableData } = table;
	const { rows } = tableData;

	const onHandleOpenEditor = () => {
		dismissToasts();
		let content = rows[ i ][ j ];
		// @todo Parse content only if gutenberg active.
		content = wp.blocks.parse( content );
		const activeCell = { i, j, content };
		dispatch( { type: 'SET_ACTIVE_CELL', payload: activeCell } );
		dispatch( { type: 'SET_VIEW', payload: 'editCellModal' } );
	};

	return (
		<div
			className="advanced-wp-table-action-item"
			onClick={ onHandleOpenEditor }
			role="presentation"
		>
			{ __( 'Edit', 'advanced-wp-table' ) }
		</div>
	);
};

export default Edit;
