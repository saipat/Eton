import {
    RECEIVE_NOTEBOOKS,
    RECEIVE_NOTEBOOK,
    REMOVE_NOTEBOOK
} from '../actions/notebook_actions';
import { merge } from 'lodash';
import { LOGOUT_USER
} from '../actions/session_actions';

const notebookReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_NOTEBOOKS:
            let obj = {};
            action.notebooks.forEach((notebook) => {
                obj[notebook.id] = notebook;
            });
            // debugger
            return merge( {}, state,  obj);
        case RECEIVE_NOTEBOOK:
            return merge({}, state, {[action.notebook.id]: action.notebook});
        case REMOVE_NOTEBOOK:
            let newState = merge({}, state);
            // console.log(newState);
            delete newState[action.notebook.id];
            // console.log(newState);
            return newState;
        case LOGOUT_USER:
            return {};
        default:
            return state;
    }
};

export default notebookReducer;

