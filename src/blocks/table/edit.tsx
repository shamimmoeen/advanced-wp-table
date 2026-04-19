import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	ToolbarGroup,
	ToolbarButton,
	ToggleControl,
	DropdownMenu,
	MenuGroup,
	MenuItem,
} from '@wordpress/components';
import {
	plus,
	copy,
	moreVertical,
	tableRowAfter,
	tableRowBefore,
	tableColumnAfter,
	tableColumnBefore,
	tableRowDelete,
	tableColumnDelete,
	chevronUp,
	chevronDown,
	chevronLeft,
	chevronRight,
} from '@wordpress/icons';
import type { TableAttributes } from './types';

interface EditProps {
	attributes: TableAttributes;
	setAttributes: ( attrs: Partial< TableAttributes > ) => void;
}

const Edit = ( { attributes, setAttributes }: EditProps ) => {
	const { rows, hasHeader, hasFooter } = attributes;
	const blockProps = useBlockProps();
	const rowCount = rows.length;
	const columnCount = rowCount > 0 ? rows[ 0 ].length : 0;

	const updateCell = (
		rowIndex: number,
		colIndex: number,
		value: string
	) => {
		const newRows = rows.map( ( row, rIdx ) =>
			rIdx === rowIndex
				? row.map( ( cell, cIdx ) =>
						cIdx === colIndex ? value : cell
				  )
				: [ ...row ]
		);
		setAttributes( { rows: newRows } );
	};

	const addRow = () => {
		const newRow = Array< string >( columnCount ).fill( '' );
		setAttributes( { rows: [ ...rows, newRow ] } );
	};

	const addColumn = () => {
		setAttributes( {
			rows: rows.map( ( row ) => [ ...row, '' ] ),
		} );
	};

	const insertRow = ( index: number, position: 'above' | 'below' ) => {
		const newRow = Array< string >( columnCount ).fill( '' );
		const insertAt = position === 'above' ? index : index + 1;
		const newRows = [
			...rows.slice( 0, insertAt ),
			newRow,
			...rows.slice( insertAt ),
		];
		setAttributes( { rows: newRows } );
	};

	const insertColumn = ( index: number, position: 'left' | 'right' ) => {
		const insertAt = position === 'left' ? index : index + 1;
		const newRows = rows.map( ( row ) => [
			...row.slice( 0, insertAt ),
			'',
			...row.slice( insertAt ),
		] );
		setAttributes( { rows: newRows } );
	};

	const deleteRow = ( rowIndex: number ) => {
		if ( rowCount <= 1 ) {
			return;
		}

		const newRows = rows.filter( ( _, idx ) => idx !== rowIndex );
		const updates: Partial< TableAttributes > = { rows: newRows };

		if ( hasHeader && rowIndex === 0 && newRows.length < 2 ) {
			updates.hasHeader = false;
		}

		if ( hasFooter && rowIndex === rowCount - 1 ) {
			updates.hasFooter = false;
		}

		setAttributes( updates );
	};

	const deleteColumn = ( colIndex: number ) => {
		if ( columnCount <= 1 ) {
			return;
		}
		setAttributes( {
			rows: rows.map( ( row ) =>
				row.filter( ( _, idx ) => idx !== colIndex )
			),
		} );
	};

	const duplicateRow = ( rowIndex: number ) => {
		const duplicated = [ ...rows[ rowIndex ] ];
		const newRows = [
			...rows.slice( 0, rowIndex + 1 ),
			duplicated,
			...rows.slice( rowIndex + 1 ),
		];
		setAttributes( { rows: newRows } );
	};

	const moveRow = ( fromIndex: number, toIndex: number ) => {
		if ( toIndex < 0 || toIndex >= rowCount ) {
			return;
		}
		const newRows = [ ...rows ];
		const [ moved ] = newRows.splice( fromIndex, 1 );
		newRows.splice( toIndex, 0, moved );
		setAttributes( { rows: newRows } );
	};

	const moveColumn = ( fromIndex: number, toIndex: number ) => {
		if ( toIndex < 0 || toIndex >= columnCount ) {
			return;
		}
		const newRows = rows.map( ( row ) => {
			const newRow = [ ...row ];
			const [ moved ] = newRow.splice( fromIndex, 1 );
			newRow.splice( toIndex, 0, moved );
			return newRow;
		} );
		setAttributes( { rows: newRows } );
	};

	const canToggleHeader = rowCount >= 2;
	const canToggleFooter =
		rowCount >= 2 && ( ! hasHeader || rowCount >= 3 );

	const renderCellActions = ( rowIndex: number, colIndex: number ) => {
		return (
			<DropdownMenu
				icon={ moreVertical }
				label={ __( 'Cell actions', 'advanced-wp-table' ) }
				className="advanced-wp-table-cell-actions"
			>
				{ ( { onClose }: { onClose: () => void } ) => (
					<>
						<MenuGroup
							label={ __(
								'Row',
								'advanced-wp-table'
							) }
						>
							<MenuItem
								icon={ tableRowBefore }
								onClick={ () => {
									insertRow( rowIndex, 'above' );
									onClose();
								} }
							>
								{ __(
									'Insert Row Above',
									'advanced-wp-table'
								) }
							</MenuItem>
							<MenuItem
								icon={ tableRowAfter }
								onClick={ () => {
									insertRow( rowIndex, 'below' );
									onClose();
								} }
							>
								{ __(
									'Insert Row Below',
									'advanced-wp-table'
								) }
							</MenuItem>
							<MenuItem
								icon={ copy }
								onClick={ () => {
									duplicateRow( rowIndex );
									onClose();
								} }
							>
								{ __(
									'Duplicate Row',
									'advanced-wp-table'
								) }
							</MenuItem>
							<MenuItem
								icon={ chevronUp }
								disabled={ rowIndex === 0 }
								onClick={ () => {
									moveRow( rowIndex, rowIndex - 1 );
									onClose();
								} }
							>
								{ __(
									'Move Row Up',
									'advanced-wp-table'
								) }
							</MenuItem>
							<MenuItem
								icon={ chevronDown }
								disabled={ rowIndex === rowCount - 1 }
								onClick={ () => {
									moveRow( rowIndex, rowIndex + 1 );
									onClose();
								} }
							>
								{ __(
									'Move Row Down',
									'advanced-wp-table'
								) }
							</MenuItem>
							<MenuItem
								icon={ tableRowDelete }
								disabled={ rowCount <= 1 }
								isDestructive
								onClick={ () => {
									deleteRow( rowIndex );
									onClose();
								} }
							>
								{ __(
									'Delete Row',
									'advanced-wp-table'
								) }
							</MenuItem>
						</MenuGroup>
						<MenuGroup
							label={ __(
								'Column',
								'advanced-wp-table'
							) }
						>
							<MenuItem
								icon={ tableColumnBefore }
								onClick={ () => {
									insertColumn( colIndex, 'left' );
									onClose();
								} }
							>
								{ __(
									'Insert Column Left',
									'advanced-wp-table'
								) }
							</MenuItem>
							<MenuItem
								icon={ tableColumnAfter }
								onClick={ () => {
									insertColumn( colIndex, 'right' );
									onClose();
								} }
							>
								{ __(
									'Insert Column Right',
									'advanced-wp-table'
								) }
							</MenuItem>
							<MenuItem
								icon={ chevronLeft }
								disabled={ colIndex === 0 }
								onClick={ () => {
									moveColumn( colIndex, colIndex - 1 );
									onClose();
								} }
							>
								{ __(
									'Move Column Left',
									'advanced-wp-table'
								) }
							</MenuItem>
							<MenuItem
								icon={ chevronRight }
								disabled={ colIndex === columnCount - 1 }
								onClick={ () => {
									moveColumn( colIndex, colIndex + 1 );
									onClose();
								} }
							>
								{ __(
									'Move Column Right',
									'advanced-wp-table'
								) }
							</MenuItem>
							<MenuItem
								icon={ tableColumnDelete }
								disabled={ columnCount <= 1 }
								isDestructive
								onClick={ () => {
									deleteColumn( colIndex );
									onClose();
								} }
							>
								{ __(
									'Delete Column',
									'advanced-wp-table'
								) }
							</MenuItem>
						</MenuGroup>
					</>
				) }
			</DropdownMenu>
		);
	};

	const renderCell = (
		cellContent: string,
		rowIndex: number,
		colIndex: number
	) => {
		const isHeaderCell = hasHeader && rowIndex === 0;
		const CellTag = isHeaderCell ? 'th' : 'td';

		return (
			<CellTag key={ colIndex }>
				<div className="advanced-wp-table-cell-wrapper">
					<RichText
						tagName="div"
						className="advanced-wp-table-cell-content"
						value={ cellContent }
						onChange={ ( value: string ) =>
							updateCell( rowIndex, colIndex, value )
						}
						placeholder={ __( 'Cell', 'advanced-wp-table' ) }
						allowedFormats={ [
							'core/bold',
							'core/italic',
							'core/link',
							'core/image',
							'core/strikethrough',
							'core/code',
						] }
						aria-label={
							isHeaderCell
								? __( `Header column ${ colIndex + 1 }`, 'advanced-wp-table' )
								: __( `Row ${ rowIndex + 1 }, Column ${ colIndex + 1 }`, 'advanced-wp-table' )
						}
					/>
					{ renderCellActions( rowIndex, colIndex ) }
				</div>
			</CellTag>
		);
	};

	const renderRows = ( rowsToRender: string[][], startIndex: number ) => {
		return rowsToRender.map( ( row, idx ) => {
			const actualIndex = startIndex + idx;
			return (
				<tr key={ actualIndex }>
					{ row.map( ( cell, colIdx ) =>
						renderCell( cell, actualIndex, colIdx )
					) }
				</tr>
			);
		} );
	};

	// Split rows into sections.
	const headerRows: string[][] = [];
	const bodyRows = [ ...rows ];
	const footerRows: string[][] = [];

	if ( hasHeader && bodyRows.length > 0 ) {
		headerRows.push( bodyRows.shift()! );
	}
	if ( hasFooter && bodyRows.length > 0 ) {
		footerRows.push( bodyRows.pop()! );
	}

	const headerStartIndex = 0;
	const bodyStartIndex = headerRows.length;
	const footerStartIndex = rows.length - footerRows.length;

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon={ tableRowAfter }
						label={ __( 'Add Row', 'advanced-wp-table' ) }
						onClick={ addRow }
					/>
					<ToolbarButton
						icon={ tableColumnAfter }
						label={ __( 'Add Column', 'advanced-wp-table' ) }
						onClick={ addColumn }
					/>
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody
					title={ __( 'Table Settings', 'advanced-wp-table' ) }
				>
					<ToggleControl
						__nextHasNoMarginBottom
						label={ __( 'Header Row', 'advanced-wp-table' ) }
						help={ __(
							'Mark the first row as a table header.',
							'advanced-wp-table'
						) }
						checked={ hasHeader }
						onChange={ ( value: boolean ) =>
							setAttributes( { hasHeader: value } )
						}
						disabled={ ! canToggleHeader }
					/>
					<ToggleControl
						__nextHasNoMarginBottom
						label={ __( 'Footer Row', 'advanced-wp-table' ) }
						help={ __(
							'Mark the last row as a table footer.',
							'advanced-wp-table'
						) }
						checked={ hasFooter }
						onChange={ ( value: boolean ) =>
							setAttributes( { hasFooter: value } )
						}
						disabled={ ! canToggleFooter }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<table className="advanced-wp-table-editor">
					{ headerRows.length > 0 && (
						<thead>
							{ renderRows( headerRows, headerStartIndex ) }
						</thead>
					) }
					<tbody>
						{ renderRows( bodyRows, bodyStartIndex ) }
					</tbody>
					{ footerRows.length > 0 && (
						<tfoot>
							{ renderRows( footerRows, footerStartIndex ) }
						</tfoot>
					) }
				</table>

				<div className="advanced-wp-table-editor-actions">
					<Button
						variant="secondary"
						size="small"
						icon={ plus }
						onClick={ addRow }
					>
						{ __( 'Add Row', 'advanced-wp-table' ) }
					</Button>
					<Button
						variant="secondary"
						size="small"
						icon={ plus }
						onClick={ addColumn }
					>
						{ __( 'Add Column', 'advanced-wp-table' ) }
					</Button>
				</div>
			</div>
		</>
	);
};

export default Edit;
