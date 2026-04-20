import { __, sprintf } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	InspectorControls,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalUseColorProps as useColorProps,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalUseBorderProps as useBorderProps,
} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	Placeholder,
	TextControl,
	ToolbarButton,
	ToolbarDropdownMenu,
	ToggleControl,
} from '@wordpress/components';
import {
	blockTable,
	copy,
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
	alignNone,
	table,
	caption as captionIcon,
} from '@wordpress/icons';

import { memo, useState } from '@wordpress/element';

import type { TableAttributes, ColumnAlign } from './types';

interface EditProps {
	attributes: TableAttributes;
	setAttributes: ( attrs: Partial< TableAttributes > ) => void;
}

interface SelectedCell {
	row: number;
	col: number;
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
	const colorProps = useColorProps( attributes );
	const borderProps = useBorderProps( attributes );
	const rowCount = rows.length;
	const columnCount = rowCount > 0 ? rows[ 0 ].length : 0;
	const isEmpty = rowCount === 0;

	const [ selectedCell, setSelectedCell ] = useState< SelectedCell | null >(
		null
	);
	const [ showCaption, setShowCaption ] = useState( !! caption );

	const getColumnAlign = ( colIndex: number ): ColumnAlign =>
		( columnAligns[ colIndex ] as ColumnAlign ) ?? '';

	const setColumnAlign = ( colIndex: number, align: ColumnAlign ) => {
		const newAligns = [ ...columnAligns ];
		while ( newAligns.length <= colIndex ) {
			newAligns.push( '' );
		}
		newAligns[ colIndex ] = align;
		setAttributes( { columnAligns: newAligns } );
	};

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
			setSelectedCell( null );
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
			setSelectedCell( null );
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
		setSelectedCell( { row: toIndex, col: selectedCell?.col ?? 0 } );
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
		setSelectedCell( { row: selectedCell?.row ?? 0, col: toIndex } );
	};

	const canToggleHeader = rowCount >= 2;
	const canToggleFooter = rowCount >= 2 && ( ! hasHeader || rowCount >= 3 );

	const renderCell = (
		cellContent: string,
		rowIndex: number,
		colIndex: number
	) => {
		const isHeaderCell = hasHeader && rowIndex === 0;
		const CellTag = isHeaderCell ? 'th' : 'td';
		const align = getColumnAlign( colIndex );
		const cellStyle = align
			? { textAlign: align as 'start' | 'center' | 'end' }
			: undefined;

		return (
			<CellTag key={ colIndex } style={ cellStyle }>
				<RichText
					tagName="div"
					className="awt__cell-content"
					value={ cellContent }
					onChange={ ( value: string ) =>
						updateCell( rowIndex, colIndex, value )
					}
					onFocus={ () =>
						setSelectedCell( {
							row: rowIndex,
							col: colIndex,
						} )
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
		colorProps.className,
		borderProps.className,
	]
		.filter( Boolean )
		.join( ' ' );

	const tableStyle = {
		...colorProps.style,
		...borderProps.style,
	};

	const selectedRow = selectedCell?.row ?? 0;
	const selectedCol = selectedCell?.col ?? 0;

	return (
		<>
			{ /* Alignment and caption — always visible */ }
			<BlockControls group="block">
				<ToolbarDropdownMenu
					icon={ alignLeft }
					label={ __(
						'Change column alignment',
						'advanced-wp-table'
					) }
					controls={ [
						{
							icon: alignNone,
							title: __( 'None', 'advanced-wp-table' ),
							isActive: getColumnAlign( selectedCol ) === '',
							onClick: () => setColumnAlign( selectedCol, '' ),
						},
						{
							icon: alignLeft,
							title: __(
								'Align column start',
								'advanced-wp-table'
							),
							isActive: getColumnAlign( selectedCol ) === 'start',
							onClick: () =>
								setColumnAlign( selectedCol, 'start' ),
						},
						{
							icon: alignCenter,
							title: __(
								'Align column center',
								'advanced-wp-table'
							),
							isActive:
								getColumnAlign( selectedCol ) === 'center',
							onClick: () =>
								setColumnAlign( selectedCol, 'center' ),
						},
						{
							icon: alignRight,
							title: __(
								'Align column end',
								'advanced-wp-table'
							),
							isActive: getColumnAlign( selectedCol ) === 'end',
							onClick: () => setColumnAlign( selectedCol, 'end' ),
						},
					] }
				/>
				<ToolbarButton
					icon={ captionIcon }
					label={
						showCaption
							? __( 'Remove caption', 'advanced-wp-table' )
							: __( 'Add caption', 'advanced-wp-table' )
					}
					isPressed={ showCaption }
					onClick={ () => {
						setShowCaption( ! showCaption );
						if ( showCaption ) {
							setAttributes( { caption: '' } );
						}
					} }
				/>
			</BlockControls>

			{ /* Edit table — only when cell is selected */ }
			{ selectedCell && (
				<BlockControls group="other">
					<ToolbarDropdownMenu
						icon={ table }
						label={ __( 'Edit table', 'advanced-wp-table' ) }
						controls={ [
							{
								icon: tableRowBefore,
								title: __(
									'Insert row before',
									'advanced-wp-table'
								),
								onClick: () =>
									insertRow( selectedRow, 'above' ),
							},
							{
								icon: tableRowAfter,
								title: __(
									'Insert row after',
									'advanced-wp-table'
								),
								onClick: () =>
									insertRow( selectedRow, 'below' ),
							},
							{
								icon: tableRowDelete,
								title: __( 'Delete row', 'advanced-wp-table' ),
								onClick: () => deleteRow( selectedRow ),
							},
							{
								icon: tableColumnBefore,
								title: __(
									'Insert column before',
									'advanced-wp-table'
								),
								onClick: () =>
									insertColumn( selectedCol, 'left' ),
							},
							{
								icon: tableColumnAfter,
								title: __(
									'Insert column after',
									'advanced-wp-table'
								),
								onClick: () =>
									insertColumn( selectedCol, 'right' ),
							},
							{
								icon: tableColumnDelete,
								title: __(
									'Delete column',
									'advanced-wp-table'
								),
								onClick: () => deleteColumn( selectedCol ),
							},
							{
								icon: copy,
								title: __(
									'Duplicate row',
									'advanced-wp-table'
								),
								onClick: () => duplicateRow( selectedRow ),
							},
							{
								icon: chevronUp,
								title: __( 'Move row up', 'advanced-wp-table' ),
								isDisabled: selectedRow === 0,
								onClick: () =>
									moveRow( selectedRow, selectedRow - 1 ),
							},
							{
								icon: chevronDown,
								title: __(
									'Move row down',
									'advanced-wp-table'
								),
								isDisabled: selectedRow === rowCount - 1,
								onClick: () =>
									moveRow( selectedRow, selectedRow + 1 ),
							},
							{
								icon: chevronLeft,
								title: __(
									'Move column left',
									'advanced-wp-table'
								),
								isDisabled: selectedCol === 0,
								onClick: () =>
									moveColumn( selectedCol, selectedCol - 1 ),
							},
							{
								icon: chevronRight,
								title: __(
									'Move column right',
									'advanced-wp-table'
								),
								isDisabled: selectedCol === columnCount - 1,
								onClick: () =>
									moveColumn( selectedCol, selectedCol + 1 ),
							},
						] }
					/>
				</BlockControls>
			) }

			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'advanced-wp-table' ) }>
					<ToggleControl
						__nextHasNoMarginBottom
						label={ __(
							'Fixed width table cells',
							'advanced-wp-table'
						) }
						checked={ hasFixedLayout }
						onChange={ ( value: boolean ) =>
							setAttributes( { hasFixedLayout: value } )
						}
					/>
					<ToggleControl
						__nextHasNoMarginBottom
						label={ __( 'Header section', 'advanced-wp-table' ) }
						checked={ hasHeader }
						onChange={ ( value: boolean ) =>
							setAttributes( { hasHeader: value } )
						}
						disabled={ ! canToggleHeader }
					/>
					<ToggleControl
						__nextHasNoMarginBottom
						label={ __( 'Footer section', 'advanced-wp-table' ) }
						checked={ hasFooter }
						onChange={ ( value: boolean ) =>
							setAttributes( { hasFooter: value } )
						}
						disabled={ ! canToggleFooter }
					/>
					<ToggleControl
						__nextHasNoMarginBottom
						label={ __( 'Striped rows', 'advanced-wp-table' ) }
						checked={ hasStripedRows }
						onChange={ ( value: boolean ) =>
							setAttributes( {
								hasStripedRows: value,
							} )
						}
					/>
				</PanelBody>
			</InspectorControls>

			<figure { ...blockProps }>
				<div className="awt__scroll-container">
					<table className={ tableClasses } style={ tableStyle }>
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

				{ showCaption && (
					<RichText
						tagName="figcaption"
						className="awt__caption"
						inlineToolbar
						aria-label={ __(
							'Table caption',
							'advanced-wp-table'
						) }
						placeholder={ __( 'Add caption', 'advanced-wp-table' ) }
						value={ caption }
						onChange={ ( value: string ) =>
							setAttributes( { caption: value } )
						}
					/>
				) }
			</figure>
		</>
	);
};

export default memo( Edit );
