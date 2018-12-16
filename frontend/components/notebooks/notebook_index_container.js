import { fetchNotebooks, fetchNotebook, createNotebook, updateNotebook, deleteNotebook } from '../../actions/notebook_actions';
import NotebookIndex from './notebook_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return ({
        notebooks: Object.values(state.entities.notebooks),
        currentUser: state.entities.users[state.session.id]
    });
};

const mapDispatchToProps = dispatch => {
    return({
        fetchNotebooks: () => dispatch(fetchNotebooks()),
        fetchNotebook: id => dispatch(fetchNotebook(id)),
        createNotebook: notebook => dispatch(createNotebook(notebook)),
        updateNotebook: notebook => dispatch(updateNotebook(notebook)),
        deleteNotebook: notebookId => dispatch(deleteNotebook(notebookId)),
        openModal: modal => dispatch(openModal(modal))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotebookIndex));