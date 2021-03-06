import * as TagAPIUtil from '../util/tag_api_util';

export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const RECEIVE_TAG = 'RECEIVE_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';

const receiveTags = tags => ({
    type: RECEIVE_TAGS,
    tags
}); 

const receiveTag = tag => ({
    type: RECEIVE_TAG,
    tag
}); 

const removeTag = tagId => ({
    type: REMOVE_TAG,
    tagId
}); 

export const fetchCurrentTag = tag => {
    return {
        type: CURRENT_TAG,
        currentTagId: tag.id,
        currentTagName: tag.name
    };
};

export const fetchTags = () => dispatch => (
    TagAPIUtil.fetchTags()
    .then( tags => dispatch(receiveTags(tags)))
);

export const createTag = tag => dispatch => (
    TagAPIUtil.createTag(tag)
    .then( tag => dispatch(receiveTag(tag)))
);

export const deleteTag = tagId => dispatch => (
    TagAPIUtil.deleteTag(tagId)
    .then(tagId => dispatch(removeTag(tagId)))
);


