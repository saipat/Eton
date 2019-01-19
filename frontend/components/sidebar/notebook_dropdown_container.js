import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { fetchCurrentNotebook } from '../../actions/notebook_actions';
import NotebookDropdown from './notebook_dropdown';

const mapStateToProps = (state) => {
 
    return ({
        // currentNotebookId: state.ui.currentNotebookId,
        // currentNotebookTitle: state.ui.currentNotebookTitle, 
        notebooks: Object.values(state.entities.notebooks),
        // notes: Object.values(state.entities.notes), 
        // history: ownProps.history
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchCurrentNotebook: currentNotebook => dispatch(fetchCurrentNotebook(currentNotebook)),
        fetchNotes: () => dispatch(fetchNotes())
    });
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotebookDropdown));