import { combineReducers } from 'redux';

import modal from './modal_reducer';
import modalReducer from './modal_reducer';

export default combineReducers({
  modal: modalReducer,
  
});