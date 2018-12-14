import { fetchNotebooks, fetchNotebook, createNotebook, updateNotebook, deleteNotebook } from '../../actions/notebook_actions';
import Notebook from './notebook';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    return ({
        notebooks: state.entities.notebooks,
        currentUser: state.entities.users[state.session.id]
    });
};

const mapDispatchToProps = dispatch => {
    return({
        fetchNotebooks: () => dispatch(fetchNotebooks()),
        fetchNotebook: id => dispatch(fetchNotebook(id)),
        createNotebook: notebook => dispatch(createNotebook(notebook)),
        updateNotebook: notebook => dispatch(updateNotebook(notebook)),
        deleteNotebook: notebookId => dispatch(deleteNotebook(notebookId))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Notebook));