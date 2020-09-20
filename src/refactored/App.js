import React, { useEffect } from 'react';
import { Fragment } from '@wordpress/element';
import { registerCoreBlocks } from '@wordpress/block-library';
import { getBlockTypes, unregisterBlockType } from '@wordpress/blocks';
import { ToastContainer } from 'react-toastify';
import { hot } from 'react-hot-loader/root';
import { useDispatch, useSelector } from 'react-redux';

import { setTablesLoading, unsetLoading, unsetTablesLoading } from '../store/reducers/ui';
import { getTables } from '../utils/table';
import { setTables, setTotal, setTotalPages } from '../store/reducers/tables';
import { toastError } from '../utils/utils';
import TableChangedDialog from './Dialogs/TableChangedDialog';
import TableDeleteDialog from './Dialogs/TableDeleteDialog';
import Views from './Views';

import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

const App = () => {
	const tablesState = useSelector( state => state.tables );
	const dispatch = useDispatch();
	const { perPage, offset, total } = tablesState;

	const uiState = useSelector( state => state.ui );
	const { loading } = uiState;

	const fetchTables = () => {
		dispatch( setTablesLoading() );

		getTables( perPage, offset )
			.then( res => {
				dispatch( setTotal( res.total ) );
				dispatch( setTotalPages( res.totalPages ) );
				dispatch( setTables( res.tables ) );
				dispatch( unsetTablesLoading() );
			} )
			.catch( err => {
				toastError( err.message );
			} );
	};

	/**
	 * Initially fetch the tables from the database.
	 */
	useEffect( () => {
		fetchTables();
		dispatch( unsetLoading() );
	}, [] );

	/**
	 * Fetch the tables when offset gets changed.
	 */
	useEffect( () => {
		if ( loading ) {
			return;
		}

		fetchTables();
	}, [ offset, total ] );

	/**
	 * Register the gutenberg core blocks.
	 */
	useEffect( () => {
		registerCoreBlocks();

		return () => {
			getBlockTypes().forEach( ( blockType ) => {
				unregisterBlockType( blockType.name );
			} );
		};
	}, [] );

	return (
		<Fragment>
			<ToastContainer
				className={ 'advanced-wp-table-toast' }
				autoClose={ 3000 }
			/>
			<TableChangedDialog />
			<TableDeleteDialog />
			<Views />
		</Fragment>
	);
};

export default hot( App );
