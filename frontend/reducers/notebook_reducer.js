import {
    RECEIVE_NOTEBOOKS,
    RECEIVE_NOTEBOOK,
    REMOVE_NOTEBOOK
} from '../actions/notebook_actions';
import { merge } from 'lodash';

const notebookReducer = (state = {1: {name: "orange", user_id: 1, updated_at: "2:00pm"}}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_NOTEBOOKS:
            return merge({}, state, action.notebooks);
        case RECEIVE_NOTEBOOK:
            return merge({}, state, {[action.notebook.id]: action.notebook});
        case REMOVE_NOTEBOOK:
            let newState = merge({}, state);
            delete newState[action.notebookId];
            return newState;
        default:
            return state;
    }
};

export default notebookReducer;

