import React from 'react';
import CreateNotebookContainer from './create_notebook_container';
import EditNotebookContainer from './edit_notebook_container';

const Modal = ({modal}) => {
    if (!modal) {
        return null;
    }
    
    let component;
    // console.log("modal>>>>>>>>>", modal);

    switch (modal.modal) {
        
        case 'createNotebook':
            component = <CreateNotebookContainer />;
            break;
        case 'editNotebook':
            component = <EditNotebookContainer notebook={modal.notebook} />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background">
            <div className=".modal-child">
                 {component}
            </div>
        </div>
    );
};

export default Modal;