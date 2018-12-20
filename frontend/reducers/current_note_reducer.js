
import { CURRENT_NOTE,CLOSE_CURRENT_NOTE } from '../actions/note_actions';
import { LOGOUT_USER } from '../../actions/sessions_actions';


export default function currentNoteReducer(state = null, action) {
    console.log("action:======", action);
  switch (action.type) {
    case CURRENT_NOTE:
      return action.currentNote;
    case CLOSE_CURRENT_NOTE:
      return null;
    case LOGOUT_USER:
      return null;
    default: 
      return state;
  }
}