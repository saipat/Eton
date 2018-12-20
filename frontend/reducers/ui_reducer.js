import { combineReducers } from 'redux';

import modalReducer from './modal_reducer';
import currentNotebookIdReducer from './current_notebookId_reducer';
import currentNotebookTitleReducer from './current_notebookTitle_reducer';

export default combineReducers({
  modal: modalReducer,
  currentNotebookId: currentNotebookIdReducer,
  currentNotebookTitle: currentNotebookTitleReducer,
  
});