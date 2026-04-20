export type ColumnAlign = 'start' | 'center' | 'end' | '';

export interface TableAttributes extends Record< string, unknown > {
	hasHeader: boolean;
	hasFooter: boolean;
	hasFixedLayout: boolean;
	hasStripedRows: boolean;
	caption: string;
	columnAligns: ColumnAlign[];
	rows: string[][];
}
