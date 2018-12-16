import React from 'react';
import CreateNotebookContainer from './create_notebook_container';

const Modal = ({modal}) => {
    if (!modal) {
        return null;
    }
    
    let component;
    
    switch (modal) {

        case 'createNotebook':
            component = <CreateNotebookContainer />;
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