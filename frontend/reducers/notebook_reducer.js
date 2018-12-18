import {
    RECEIVE_NOTEBOOKS,
    RECEIVE_NOTEBOOK,
    REMOVE_NOTEBOOK,
    CURRENT_NOTEBOOK
} from '../actions/notebook_actions';
import { merge } from 'lodash';
import { LOGOUT_USER
} from '../actions/session_actions';

const notebookReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_NOTEBOOKS:
            let obj = {};
            // let inbox = {   notebook: {
            //         id: 1,
            //         name: '<inbox>', 
            //         created_at: '',
            //         updated_at: ''
            //     }
            // };
            
            action.notebooks.forEach((notebook) => {
                obj[notebook.id] = notebook;
            });

            return merge( {}, state, obj);
            
        case RECEIVE_NOTEBOOK:
            return merge({}, state, {[action.notebook.id]: action.notebook});
        case REMOVE_NOTEBOOK:
            let newState = merge({}, state);
            delete newState[action.notebook.id];
            return newState;
        case CURRENT_NOTEBOOK:
            return action.currentNotebookId;
        case LOGOUT_USER:
            return {};
        default:
            return state;
    }
};

export default notebookReducer;

