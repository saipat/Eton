import { connect } from 'react-redux';
import { closeModal } from '../../actions/notebook_actions';
import NotebookModal from './notebook_modal';

const mapStateToProps = state => {
    console.log("mapStateToProps>>>>>>>>>>", state.ui);
    let ret = {
        modal: state.ui.modal        
    };
    if (state.ui.modal && state.ui.modal.notebook) {
        ret.notebook = state.ui.modal.notebook
    }
    console.log("Ret>>>>>>>>>", ret);
    return (ret);
};

const mapDispatchToProps = dispatch => {
    return ({
        closeModal: () => dispatch(closeModal())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookModal);