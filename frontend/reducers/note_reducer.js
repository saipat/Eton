import { RECEIVE_NOTES, RECEIVE_NOTE, REMOVE_NOTE} from '../actions/note_actions';
import { merge } from 'lodash';
import {
    LOGOUT_USER
} from '../actions/session_actions';

const noteReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_NOTES:
            return merge({}, action.notes);
        case RECEIVE_NOTE:
            console.log("action.note", action.note);
            return merge({}, state, {[action.note.id]: action.note});
        case REMOVE_NOTE:
            let newState = merge({}, state);
            delete newState[action.noteId];
            return newState;
        case LOGOUT_USER:
            return {};
        default:
            return state;
    }
};

export default noteReducer;