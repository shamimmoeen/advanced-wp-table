import WPTableEditor from '../editor/Editor';

const Modal = ( { modalState, cellData, onHandleSetCellData, onHandleCloseModal } ) => {
	let modal = '';

	if ( modalState ) {
		modal = (
			<div className="wp-table-advanced-modal">
				<div className="wp-table-advanced-modal-wrapper">
					<div className="wp-table-advanced-modal-content">
						<WPTableEditor
							cellData={ cellData }
							onHandleSetCellData={ onHandleSetCellData }
							onHandleCloseModal={ onHandleCloseModal }
						/>
					</div>
				</div>
			</div>
		);
	}

	return modal;
};

export default Modal;
