import { postTable, prepareTable, validateTable } from '../../utils/table';
import { dismissToasts, toastError, toastSuccess } from '../../utils/utils';
import { StateContext } from '../App';

const { useContext } = wp.element;
const { __ } = wp.i18n;

const Form = () => {
	const { state, dispatch } = useContext( StateContext );
	const { formLoading, newTableData } = state;
	const { title, sizeOfRows, sizeOfColumns } = newTableData;

	const onHandleInputChange = ( e ) => {
		dispatch( { type: 'SET_INPUT', payload: { name: e.target.name, value: e.target.value } } );
	};

	const onHandleCancelSubmission = () => {
		dispatch( { type: 'CLEAR_NEW_TABLE_DATA' } );
		dispatch( { type: 'SET_VIEW', payload: 'list' } );
		dismissToasts();
	};

	// @todo do primitive
	const onHandleFormSubmission = ( e ) => {
		e.preventDefault();

		try {
			validateTable( newTableData );
		} catch ( err ) {
			toastError( err.message );
			return;
		}

		const parsedTableData = prepareTable( newTableData );

		postTable( parsedTableData )
			.then( ( table ) => {
				dispatch( { type: 'SET_TABLE', payload: table } );
				dispatch( { type: 'SET_VIEW', payload: 'table' } );
				dispatch( { type: 'CLEAR_NEW_TABLE_DATA' } );
				dispatch( { type: 'ADD_NEW_TABLE', payload: table } );
				toastSuccess( __( 'Table created successfully', 'advanced-wp-table' ) );
			} )
			.catch( ( err ) => toastError( err.message ) );
	};

	let formClasses = 'advanced-wp-table-new-table-form';

	if ( formLoading ) {
		formClasses += ' loading';
	}

	return (
		<form className={ formClasses } onSubmit={ onHandleFormSubmission }>
			<div className="advanced-wp-table-form-item">
				<label htmlFor="title">{ __( 'Title', 'advanced-wp-table' ) }</label>
				<div className={ 'advanced-wp-table-form-input-wrapper' }>
					<input
						type="text"
						id={ 'title' }
						name={ 'title' }
						placeholder={ __( 'Give a title', 'advanced-wp-table' ) }
						onChange={ onHandleInputChange }
						value={ title }
					/>
				</div>
			</div>
			<div className="advanced-wp-table-form-item">
				<label htmlFor="no-of-rows">{ __( 'How many rows?', 'advanced-wp-table' ) }</label>
				<div className={ 'advanced-wp-table-form-input-wrapper' }>
					<input
						type="number"
						id={ 'no-of-rows' }
						name={ 'sizeOfRows' }
						onChange={ onHandleInputChange }
						value={ sizeOfRows }
					/>
				</div>
			</div>
			<div className="advanced-wp-table-form-item">
				<label htmlFor="no-of-columns">{ __( 'How many columns?', 'advanced-wp-table' ) }</label>
				<div className={ 'advanced-wp-table-form-input-wrapper' }>
					<input
						type="number"
						id={ 'no-of-columns' }
						name={ 'sizeOfColumns' }
						onChange={ onHandleInputChange }
						value={ sizeOfColumns }
					/>
				</div>
			</div>

			<div className={ 'advanced-wp-table-form-buttons' }>
				<button className={ 'button button-primary' } type={ 'submit' }>
					{ __( 'Create', 'advanced-wp-table' ) }
				</button>
				{ ` ` }
				<button className={ 'button' } onClick={ onHandleCancelSubmission }>
					{ __( 'Cancel', 'advanced-wp-table' ) }
				</button>
			</div>
		</form>
	);
};

export default Form;
