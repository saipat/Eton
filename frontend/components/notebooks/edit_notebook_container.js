import { connect } from 'react-redux';
import { fetchNotebook, updateNotebook } from '../../actions/notebook_actions';
import EditNotebookForm from './create_notebook';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    let notebookId = ownProps.match.params.notebookId;
    let notebook = state.entities.notebooks[notebookId];
    return ({
        currentUser: state.entities.users[state.session.id],
        notebook: notebook
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchNotebook: id => dispatch(fetchNotebook(id)),
        updateNotebook: notebook => dispatch(updateNotebook(notebook)),
        closeModal: () => dispatch(closeModal())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(EditNotebookForm);