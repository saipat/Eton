import { connect } from 'react-redux';
import { fetchNotebook, updateNotebook } from '../../actions/notebook_actions';
import EditNotebookForm from './edit_notebook';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
   console.log("ownprops", ownProps);
    return ({
        currentUser: state.entities.users[state.session.id]
        // notebook: state.entities.notebooks[state.entities.notebooks[currentUserId]]
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