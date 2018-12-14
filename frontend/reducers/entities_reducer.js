import {
    combineReducers
} from 'redux';

import usersReducer from './users_reducer';
import notebookReducer from './notebook_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    notebooks: notebookReducer
});

export default entitiesReducer;