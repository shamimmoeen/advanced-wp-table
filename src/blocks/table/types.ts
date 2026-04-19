export interface TableAttributes extends Record< string, unknown > {
	hasHeader: boolean;
	hasFooter: boolean;
	rows: string[][];
}
