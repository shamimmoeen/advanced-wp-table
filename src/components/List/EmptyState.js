import { Button, Card, CardBody, Icon } from '@wordpress/components';
import { table as tableIcon } from '@wordpress/icons';
import { postTable } from '../../api';
import { showErrorNotice, showSuccessNotice } from '../../utils';
import { StateContext } from '../App';

const { useContext, useState } = wp.element;
const { __ } = wp.i18n;

const EmptyState = () => {
	const { state, dispatch } = useContext( StateContext );
	const { tables } = state;
	const [ creating, setCreating ] = useState( false );

	const onCreateSampleTable = () => {
		setCreating( true );

		const sampleData = {
			title: __( 'Sample Table', 'advanced-wp-table' ),
			advanced_wp_table_data: {
				size: { rows: 3, columns: 3 },
				rows: [
					[
						__( 'Header 1', 'advanced-wp-table' ),
						__( 'Header 2', 'advanced-wp-table' ),
						__( 'Header 3', 'advanced-wp-table' ),
					],
					[
						__( 'Row 1, Col 1', 'advanced-wp-table' ),
						__( 'Row 1, Col 2', 'advanced-wp-table' ),
						__( 'Row 1, Col 3', 'advanced-wp-table' ),
					],
					[
						__( 'Row 2, Col 1', 'advanced-wp-table' ),
						__( 'Row 2, Col 2', 'advanced-wp-table' ),
						__( 'Row 2, Col 3', 'advanced-wp-table' ),
					],
				],
			},
		};

		postTable( sampleData )
			.then( ( newTable ) => {
				setCreating( false );
				dispatch( { type: 'UPDATE_TABLES', payload: [ newTable, ...tables ] } );
				showSuccessNotice( __( 'Sample table created successfully', 'advanced-wp-table' ) );

				wp.a11y.speak( __( 'Sample table created', 'advanced-wp-table' ) );
			} )
			.catch( () => {
				setCreating( false );
				showErrorNotice( __( 'Oops, there was a problem when creating the sample table', 'advanced-wp-table' ) );
				wp.a11y.speak( __( 'Error creating sample table', 'advanced-wp-table' ), 'assertive' );
			} );
	};

	return (
		<Card>
			<CardBody>
				<div className={ 'advanced-wp-table-empty-state' }>
					<Icon icon={ tableIcon } size={ 48 } />
					<h3>{ __( "You don't have any tables yet.", 'advanced-wp-table' ) }</h3>
					<p>{ __( 'Click the button below to create a sample table to get started.', 'advanced-wp-table' ) }</p>
					<Button
						variant={ 'secondary' }
						isBusy={ creating }
						disabled={ creating }
						onClick={ onCreateSampleTable }
					>
						{ __( 'Create a Sample Table', 'advanced-wp-table' ) }
					</Button>
				</div>
			</CardBody>
		</Card>
	);
};

export default EmptyState;
