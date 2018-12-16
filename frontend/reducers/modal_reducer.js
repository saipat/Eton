import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default function modalReducer(state = null, action) {
  // console.log("Reducer>>>>>>>>>", action);
  switch (action.type) {
    
    case OPEN_MODAL:
      return action;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
};