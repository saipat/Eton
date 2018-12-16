import { RECEIVE_NOTES, RECEIVE_NOTE, REMOVE_NOTE} from '../actions/note_actions';
import { merge } from 'lodash';

const noteReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_NOTES:
            return merge({}, action.notes);
        case RECEIVE_NOTE:
            return merge({}, state, {[action.note.id]: action.note});
        case REMOVE_NOTE:
            let newState = merge({}, state);
            delete newState[action.noteId];
            return newState;
        default:
            return state;
    }
};

export default noteReducer;