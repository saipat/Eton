import {
    combineReducers
} from 'redux';

import usersReducer from './users_reducer';
import notebookReducer from './notebook_reducer';
import noteReducer from './note_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    notebooks: notebookReducer,
    notes: noteReducer
});

export default entitiesReducer;