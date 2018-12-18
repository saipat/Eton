import {
    CURRENT_NOTEBOOK
} from '../actions/notebook_actions';

import {
    LOGOUT_USER
} from '../actions/session_actions';

export default function currentNotebookIdReducer(state = null, action) {
    switch (action.type) {
        case CURRENT_NOTEBOOK:
            return action.currentNotebookId;
        case LOGOUT_USER:
            return {};
        default:
            return state;
    }
}
