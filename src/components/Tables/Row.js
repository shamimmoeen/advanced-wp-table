import React, { useRef } from 'react';
import Actions from './Actions';
import { copyShortcode, getShortcode, getType } from '../../utils/table';

const Row = ( { table, onHandleNavigateToTable } ) => {
	const rowActionsRef = useRef( '' );

	const handleRowFocus = () => {
		rowActionsRef.current.classList.add( 'visible' );
	}

	const handleRowBlur = () => {
		rowActionsRef.current.classList.remove( 'visible' );
	}

	return (
		<tr>
			<td>
				<strong>
					<a
						href={ '#/' }
						className={ 'row-title' }
						onClick={ ( e ) => onHandleNavigateToTable( e, table ) }
						onFocus={ handleRowFocus }
						onBlur={ handleRowBlur }
					>
						{ table.title.rendered }
					</a>
				</strong>
				<div className={ 'row-actions' } ref={ rowActionsRef }>
					<Actions
						table={ table }
						onHandleRowFocus={ handleRowFocus }
						onHandleRowBlur={ handleRowBlur }
					/>
				</div>
			</td>
			<td>{ getType( table ) }</td>
			<td>
				<input
					type="text"
					className={ 'advanced-wp-table-shortcode' }
					value={ getShortcode( table.id ) }
					readOnly={ true }
					onClick={ copyShortcode }
				/>
			</td>
		</tr>
	);
}

export default Row;
