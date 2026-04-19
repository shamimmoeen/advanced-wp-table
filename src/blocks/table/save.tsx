import { useBlockProps, RichText } from '@wordpress/block-editor';
import type { TableAttributes } from './types';

interface SaveProps {
	attributes: TableAttributes;
}

const save = ( { attributes }: SaveProps ) => {
	const { rows, hasHeader, hasFooter } = attributes;
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

	const renderRows = (
		rowsToRender: string[][],
		CellTag: 'th' | 'td'
	) => {
		return rowsToRender.map( ( row, rowIdx ) => (
			<tr key={ rowIdx }>
				{ row.map( ( cell, colIdx ) => (
					<CellTag key={ colIdx }>
						<RichText.Content value={ cell } />
					</CellTag>
				) ) }
			</tr>
		) );
	};

	return (
		<div { ...blockProps }>
			<table>
				{ headerRows.length > 0 && (
					<thead>{ renderRows( headerRows, 'th' ) }</thead>
				) }
				<tbody>{ renderRows( bodyRows, 'td' ) }</tbody>
				{ footerRows.length > 0 && (
					<tfoot>{ renderRows( footerRows, 'td' ) }</tfoot>
				) }
			</table>
		</div>
	);
};

export default save;
