import React, { forwardRef } from 'react';
import 'draft-js-static-toolbar-plugin/lib/plugin.css';
import {
	ItalicButton,
	BoldButton,
	UnderlineButton,
	CodeButton,
	HeadlineOneButton,
	HeadlineTwoButton,
	HeadlineThreeButton,
	UnorderedListButton,
	OrderedListButton,
	BlockquoteButton,
	CodeBlockButton,
	SupButton,
	SubButton,
} from 'draft-js-buttons';
// import Bold from '../../MyEditor/Button/Bold';

// import SubButton from './SubButton';
// import SupButton from './SupButton';
import StrikethroughButton from './StrikethroughButton';

const EditorToolbar = ( { staticToolbar }, ref ) => {
	const { Toolbar } = staticToolbar;

	return (
		<div ref={ ref }>
			<Toolbar>
				{
					( externalProps ) => (
						<>
							<BoldButton { ...externalProps } />
							<ItalicButton { ...externalProps } />
							<UnderlineButton { ...externalProps } />
							<CodeButton { ...externalProps } />
							<HeadlineOneButton { ...externalProps } />
							<HeadlineTwoButton { ...externalProps } />
							<HeadlineThreeButton { ...externalProps } />
							<UnorderedListButton { ...externalProps } />
							<OrderedListButton { ...externalProps } />
							<BlockquoteButton { ...externalProps } />
							<CodeBlockButton { ...externalProps } />
							<SubButton { ...externalProps } />
							<SupButton { ...externalProps } />
							<StrikethroughButton { ...externalProps } />
						</>
					)
				}
			</Toolbar>
		</div>
	);
};

export default forwardRef( EditorToolbar );
