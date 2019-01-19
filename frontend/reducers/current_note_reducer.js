
import { CURRENT_NOTE,CLOSE_CURRENT_NOTE, MAKE_NEW_NOTE } from '../actions/note_actions';
import { LOGOUT_USER } from '../actions/session_actions';


export default function currentNoteReducer(state = null, action) {
    // console.log("action:======", action);
  switch (action.type) {
    case CURRENT_NOTE:
      return action.currentNote.id;
    case CLOSE_CURRENT_NOTE:
      return null;
    case 'RECEIVE_UPDATING':
      return 'Soon to come';
    case MAKE_NEW_NOTE:
      return null;
    case LOGOUT_USER:
      return null;
    default: 
      return state;
  }
}