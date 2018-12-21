import { RECEIVE_TAGS, RECEIVE_TAG, REMOVE_TAG } from '../actions/tag_actions';
import { merge } from 'lodash';
import { LOGOUT_USER } from '../actions/session_actions';

const tagReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_TAGS:
            return merge({}, action.tags);
        case RECEIVE_TAG:
            return merge({}, state, {[action.tag.id]: action.tag});
        case REMOVE_TAG:
            let newState = merge({}, state);
            delete newState[action.tagId.id];
            return newState;
        case LOGOUT_USER:
            return {};
        default:
            return state;
    }
};

export default tagReducer;