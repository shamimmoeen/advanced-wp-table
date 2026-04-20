import { useBlockProps, RichText } from '@wordpress/block-editor';
import type { TableAttributes, ColumnAlign } from './types';

interface SaveProps {
	attributes: TableAttributes;
}

const save = ( { attributes }: SaveProps ) => {
	const {
		rows,
		hasHeader,
		hasFooter,
		hasFixedLayout,
		hasStripedRows,
		caption,
		columnAligns,
	} = attributes;
	const blockProps = useBlockProps.save();

	const headerRows: string[][] = [];
	const bodyRows = [ ...rows ];
	const footerRows: string[][] = [];

	if ( hasHeader && bodyRows.length > 0 ) {
		headerRows.push( bodyRows.shift()! );
	}
	if ( hasFooter && bodyRows.length > 0 ) {
		footerRows.push( bodyRows.pop()! );
	}

	const renderRows = ( rowsToRender: string[][], CellTag: 'th' | 'td' ) => {
		return rowsToRender.map( ( row, rowIdx ) => (
			<tr key={ rowIdx }>
				{ row.map( ( cell, colIdx ) => {
					const align =
						( columnAligns[ colIdx ] as ColumnAlign ) ?? '';
					const cellStyle = align
						? { textAlign: align as 'left' | 'center' | 'right' }
						: undefined;

					return (
						<CellTag key={ colIdx } style={ cellStyle }>
							<RichText.Content value={ cell } />
						</CellTag>
					);
				} ) }
			</tr>
		) );
	};

	const tableClasses =
		[
			hasFixedLayout && 'awt__table--fixed',
			hasStripedRows && 'awt__table--striped',
		]
			.filter( Boolean )
			.join( ' ' ) || undefined;

	return (
		<figure { ...blockProps }>
			<table className={ tableClasses }>
				{ headerRows.length > 0 && (
					<thead>{ renderRows( headerRows, 'th' ) }</thead>
				) }
				<tbody>{ renderRows( bodyRows, 'td' ) }</tbody>
				{ footerRows.length > 0 && (
					<tfoot>{ renderRows( footerRows, 'td' ) }</tfoot>
				) }
			</table>

			{ caption && (
				<RichText.Content tagName="figcaption" value={ caption } />
			) }
		</figure>
	);
};

export default save;
