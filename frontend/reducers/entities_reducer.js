import {
    combineReducers
} from 'redux';

import usersReducer from './users_reducer';
import notebookReducer from './notebook_reducer';
import noteReducer from './note_reducer';
import tagReducer from './tag_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    notebooks: notebookReducer,
    notes: noteReducer, 
    tags: tagReducer
});

export default entitiesReducer;