import WPTableEditor from '../editor/Editor';

const Modal = ( { modalState, cellData, onHandleSetCellData, onHandleCloseModal } ) => {
	let modal = '';

	if ( modalState ) {
		modal = (
			<div className="advanced-wp-table-modal">
				<div className="advanced-wp-table-modal-wrapper">
					<div className="advanced-wp-table-modal-content">
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
