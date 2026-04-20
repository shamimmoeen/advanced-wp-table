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
		onFocus?: () => void;
		placeholder?: string;
		allowedFormats?: string[];
		inlineToolbar?: boolean;
		'aria-label'?: string;
	} > & {
		Content: ComponentType< { tagName?: string; value: string } >;
	};

	export const BlockControls: ComponentType< {
		group?: string;
		children: React.ReactNode;
	} >;

	export const InspectorControls: ComponentType< {
		children: React.ReactNode;
	} >;

	export function __experimentalUseColorProps(
		attributes: Record< string, unknown >
	): { className: string; style: Record< string, string > };

	export function __experimentalUseBorderProps(
		attributes: Record< string, unknown >
	): { className: string; style: Record< string, string > };
}
