import { connect } from 'react-redux';
import { closeModal } from '../../actions/notebook_actions';
import NotebookModal from './notebook_modal';

const mapStateToProps = state => {
    return ({
        modal: state.ui.modal
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        closeModal: () => dispatch(closeModal())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookModal);