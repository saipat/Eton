import { connect } from 'react-redux';
import { fetchTags, deleteTag } from '../../actions/tag_actions';
import TagIndex from './tag_index';
import { withRouter } from 'react-router-dom';


const mapStateToProps = state => {
    return({
        tags: Object.values(state.entities.tags)
    });
};

const mapDispatchToProps = dispatch => {
    return({
        fetchTags: () => dispatch(fetchTags()),
        deleteTag: tagId => dispatch(deleteTag(tagId)),
        fetchCurrentTag: tag => dispatch(fetchCurrentTag(tag))
    });
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TagIndex));


