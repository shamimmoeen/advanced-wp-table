import { __, sprintf } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	Placeholder,
	TextControl,
	ToolbarGroup,
	ToolbarButton,
	ToggleControl,
	DropdownMenu,
	MenuGroup,
	MenuItem,
} from '@wordpress/components';
import {
	blockTable,
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
	alignLeft,
	alignCenter,
	alignRight,
} from '@wordpress/icons';

import { useState } from '@wordpress/element';

import type { TableAttributes, ColumnAlign } from './types';

interface EditProps {
	attributes: TableAttributes;
	setAttributes: ( attrs: Partial< TableAttributes > ) => void;
}

function createTable( rowCount: number, columnCount: number ) {
	return Array.from( { length: rowCount }, () =>
		Array< string >( columnCount ).fill( '' )
	);
}

const Edit = ( { attributes, setAttributes }: EditProps ) => {
	const {
		rows,
		hasHeader,
		hasFooter,
		hasFixedLayout,
		hasStripedRows,
		caption,
		columnAligns,
	} = attributes;
	const blockProps = useBlockProps();
	const rowCount = rows.length;
	const columnCount = rowCount > 0 ? rows[ 0 ].length : 0;
	const isEmpty = rowCount === 0;

	const getColumnAlign = ( colIndex: number ): ColumnAlign =>
		( columnAligns[ colIndex ] as ColumnAlign ) ?? '';

	const setColumnAlign = ( colIndex: number, align: ColumnAlign ) => {
		const newAligns = [ ...columnAligns ];
		// Extend array if needed.
		while ( newAligns.length <= colIndex ) {
			newAligns.push( '' );
		}
		newAligns[ colIndex ] = align;
		setAttributes( { columnAligns: newAligns } );
	};

	// State for the initial setup form.
	const [ initialRowCount, setInitialRowCount ] = useState( 2 );
	const [ initialColumnCount, setInitialColumnCount ] = useState( 2 );

	const onCreateTable = () => {
		setAttributes( {
			rows: createTable( initialRowCount, initialColumnCount ),
			columnAligns: Array< ColumnAlign >( initialColumnCount ).fill( '' ),
		} );
	};

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
			columnAligns: [ ...columnAligns, '' ],
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
		const newAligns = [ ...columnAligns ];
		newAligns.splice( insertAt, 0, '' );
		setAttributes( { rows: newRows, columnAligns: newAligns } );
	};

	const deleteRow = ( rowIndex: number ) => {
		const newRows = rows.filter( ( _, idx ) => idx !== rowIndex );
		const updates: Partial< TableAttributes > = { rows: newRows };

		if ( newRows.length === 0 ) {
			updates.hasHeader = false;
			updates.hasFooter = false;
			updates.columnAligns = [];
		} else {
			if ( hasHeader && ( rowIndex === 0 || newRows.length < 2 ) ) {
				updates.hasHeader = false;
			}
			if (
				hasFooter &&
				( rowIndex === rowCount - 1 || newRows.length < 2 )
			) {
				updates.hasFooter = false;
			}
		}

		setAttributes( updates );
	};

	const deleteColumn = ( colIndex: number ) => {
		if ( columnCount <= 1 ) {
			setAttributes( {
				rows: [],
				columnAligns: [],
				hasHeader: false,
				hasFooter: false,
			} );
			return;
		}

		const newAligns = columnAligns.filter( ( _, idx ) => idx !== colIndex );
		setAttributes( {
			rows: rows.map( ( row ) =>
				row.filter( ( _, idx ) => idx !== colIndex )
			),
			columnAligns: newAligns,
		} );
	};

	const duplicateRow = ( rowIndex: number ) => {
		const duplicated = structuredClone( rows[ rowIndex ] );
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
		const newAligns = [ ...columnAligns ];
		const [ movedAlign ] = newAligns.splice( fromIndex, 1 );
		newAligns.splice( toIndex, 0, movedAlign );
		setAttributes( { rows: newRows, columnAligns: newAligns } );
	};

	const canToggleHeader = rowCount >= 2;
	const canToggleFooter = rowCount >= 2 && ( ! hasHeader || rowCount >= 3 );

	const renderCellActions = ( rowIndex: number, colIndex: number ) => {
		return (
			<DropdownMenu
				icon={ moreVertical }
				label={ __( 'Cell actions', 'advanced-wp-table' ) }
				className="awt__cell-actions"
			>
				{ ( { onClose }: { onClose: () => void } ) => (
					<>
						<MenuGroup label={ __( 'Row', 'advanced-wp-table' ) }>
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
								{ __( 'Duplicate Row', 'advanced-wp-table' ) }
							</MenuItem>
							<MenuItem
								icon={ chevronUp }
								disabled={ rowIndex === 0 }
								onClick={ () => {
									moveRow( rowIndex, rowIndex - 1 );
									onClose();
								} }
							>
								{ __( 'Move Row Up', 'advanced-wp-table' ) }
							</MenuItem>
							<MenuItem
								icon={ chevronDown }
								disabled={ rowIndex === rowCount - 1 }
								onClick={ () => {
									moveRow( rowIndex, rowIndex + 1 );
									onClose();
								} }
							>
								{ __( 'Move Row Down', 'advanced-wp-table' ) }
							</MenuItem>
							<MenuItem
								icon={ tableRowDelete }
								isDestructive
								onClick={ () => {
									deleteRow( rowIndex );
									onClose();
								} }
							>
								{ __( 'Delete Row', 'advanced-wp-table' ) }
							</MenuItem>
						</MenuGroup>
						<MenuGroup
							label={ __( 'Align Column', 'advanced-wp-table' ) }
						>
							<MenuItem
								icon={ alignLeft }
								aria-pressed={
									getColumnAlign( colIndex ) === 'left'
								}
								onClick={ () => {
									setColumnAlign(
										colIndex,
										getColumnAlign( colIndex ) === 'left'
											? ''
											: 'left'
									);
									onClose();
								} }
							>
								{ __( 'Align Left', 'advanced-wp-table' ) }
							</MenuItem>
							<MenuItem
								icon={ alignCenter }
								aria-pressed={
									getColumnAlign( colIndex ) === 'center'
								}
								onClick={ () => {
									setColumnAlign(
										colIndex,
										getColumnAlign( colIndex ) === 'center'
											? ''
											: 'center'
									);
									onClose();
								} }
							>
								{ __( 'Align Center', 'advanced-wp-table' ) }
							</MenuItem>
							<MenuItem
								icon={ alignRight }
								aria-pressed={
									getColumnAlign( colIndex ) === 'right'
								}
								onClick={ () => {
									setColumnAlign(
										colIndex,
										getColumnAlign( colIndex ) === 'right'
											? ''
											: 'right'
									);
									onClose();
								} }
							>
								{ __( 'Align Right', 'advanced-wp-table' ) }
							</MenuItem>
						</MenuGroup>
						<MenuGroup
							label={ __( 'Column', 'advanced-wp-table' ) }
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
								{ __( 'Delete Column', 'advanced-wp-table' ) }
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
		const align = getColumnAlign( colIndex );
		const cellStyle = align
			? { textAlign: align as 'left' | 'center' | 'right' }
			: undefined;

		return (
			<CellTag key={ colIndex } style={ cellStyle }>
				<div className="awt__cell">
					<RichText
						tagName="div"
						className="awt__cell-content"
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
								? sprintf(
										/* translators: %d: column number */
										__(
											'Header column %d',
											'advanced-wp-table'
										),
										colIndex + 1
								  )
								: sprintf(
										/* translators: %1$d: row number, %2$d: column number */
										__(
											'Row %1$d, Column %2$d',
											'advanced-wp-table'
										),
										rowIndex + 1,
										colIndex + 1
								  )
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

	// Show setup form when table has no rows yet.
	if ( isEmpty ) {
		return (
			<div { ...blockProps }>
				<Placeholder
					icon={ blockTable }
					label={ __( 'Advanced Table', 'advanced-wp-table' ) }
					instructions={ __(
						'Set the number of rows and columns for your table.',
						'advanced-wp-table'
					) }
				>
					<form
						className="awt__setup"
						onSubmit={ ( e: React.FormEvent ) => {
							e.preventDefault();
							onCreateTable();
						} }
					>
						<TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={ __( 'Column count', 'advanced-wp-table' ) }
							type="number"
							min="1"
							value={ String( initialColumnCount ) }
							onChange={ ( value: string ) =>
								setInitialColumnCount(
									parseInt( value, 10 ) || 1
								)
							}
						/>
						<TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={ __( 'Row count', 'advanced-wp-table' ) }
							type="number"
							min="1"
							value={ String( initialRowCount ) }
							onChange={ ( value: string ) =>
								setInitialRowCount( parseInt( value, 10 ) || 1 )
							}
						/>
						<Button
							variant="primary"
							type="submit"
							__next40pxDefaultSize
						>
							{ __( 'Create Table', 'advanced-wp-table' ) }
						</Button>
					</form>
				</Placeholder>
			</div>
		);
	}

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

	const tableClasses = [
		'awt__table',
		hasFixedLayout && 'awt__table--fixed',
		hasStripedRows && 'awt__table--striped',
	]
		.filter( Boolean )
		.join( ' ' );

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
					<ToggleControl
						__nextHasNoMarginBottom
						label={ __(
							'Fixed width table cells',
							'advanced-wp-table'
						) }
						help={ __(
							'Distribute column widths evenly.',
							'advanced-wp-table'
						) }
						checked={ hasFixedLayout }
						onChange={ ( value: boolean ) =>
							setAttributes( { hasFixedLayout: value } )
						}
					/>
					<ToggleControl
						__nextHasNoMarginBottom
						label={ __( 'Striped rows', 'advanced-wp-table' ) }
						help={ __(
							'Alternate row background colors.',
							'advanced-wp-table'
						) }
						checked={ hasStripedRows }
						onChange={ ( value: boolean ) =>
							setAttributes( { hasStripedRows: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>

			<figure { ...blockProps }>
				<div className="awt__scroll-container">
					<table className={ tableClasses }>
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
				</div>

				<RichText
					tagName="figcaption"
					className="awt__caption"
					aria-label={ __( 'Table caption', 'advanced-wp-table' ) }
					placeholder={ __( 'Add caption', 'advanced-wp-table' ) }
					value={ caption }
					onChange={ ( value: string ) =>
						setAttributes( { caption: value } )
					}
				/>

				<div className="awt__actions">
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
			</figure>
		</>
	);
};

export default Edit;
