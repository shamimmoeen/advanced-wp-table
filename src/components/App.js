import React, { useEffect } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { Fragment } from '@wordpress/element';
import { registerCoreBlocks } from '@wordpress/block-library';
import { getBlockTypes, unregisterBlockType } from '@wordpress/blocks';
import { ToastContainer } from 'react-toastify';
import { hot } from 'react-hot-loader/root';

import { unsetTablesLoading } from '../store/reducers/ui';
import { getTables } from '../utils/table';
import { setCache, setTables, setTotal, setTotalPages } from '../store/reducers/tables';
import { toastError } from '../utils/utils';
import TableChangedDialog from './Dialogs/TableChangedDialog';
import TableDeleteDialog from './Dialogs/TableDeleteDialog';
import Views from './Views';

import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

const App = () => {
	const tablesState = useSelector( state => state.tables );
	const dispatch = useDispatch();
	const { perPage, offset } = tablesState;

	const fetchTables = () => {
		getTables( perPage, offset )
			.then( res => {
				batch( () => {
					dispatch( setTotal( res.total ) );
					dispatch( setTotalPages( res.totalPages ) );
					dispatch( setTables( res.tables ) );
					dispatch( setCache( res.tables ) );
					dispatch( unsetTablesLoading() );
				} );
			} )
			.catch( err => {
				dispatch( unsetTablesLoading() );

				toastError( err.message );
			} );
	};

	/**
	 * Initially fetch the tables from the database.
	 */
	useEffect( () => {
		fetchTables();
	}, [] );

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
