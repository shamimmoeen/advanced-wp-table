declare module '@wordpress/block-editor' {
	import type { ComponentType } from 'react';

	export function useBlockProps(
		props?: Record< string, unknown >
	): Record< string, unknown >;

	export namespace useBlockProps {
		function save(
			props?: Record< string, unknown >
		): Record< string, unknown >;
	}

	export const RichText: ComponentType< {
		tagName?: string;
		className?: string;
		value: string;
		onChange: ( value: string ) => void;
		placeholder?: string;
		allowedFormats?: string[];
		'aria-label'?: string;
	} > & {
		Content: ComponentType< { value: string } >;
	};

	export const BlockControls: ComponentType< {
		children: React.ReactNode;
	} >;

	export const InspectorControls: ComponentType< {
		children: React.ReactNode;
	} >;
}
