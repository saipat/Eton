import { connect } from 'react-redux';
import { createNotebook } from '../../actions/notebook_actions';
import CreateNotebookForm from './create_notebook';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return({
         currentUser: state.entities.users[state.session.id]
    });
};

const mapDispatchToProps = dispatch => {
    return({
        fetchNotebook: (id) => dispatch(fetchNotebook(id)),
        createNotebook: notebook => dispatch(createNotebook(notebook)),
        closeModal: () => dispatch(closeModal())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateNotebookForm);