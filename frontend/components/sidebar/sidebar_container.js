import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { fetchNotebook, fetchNotebooks } from '../../actions/notebook_actions';
import { fetchNotes, createNote, makeNewNote } from '../../actions/note_actions';
import { fetchTags, createTag, deleteTag } from '../../actions/tag_actions';
import Sidebar from './sidebar';

const mapStateToProps = state => {
    
    return ({
        notebooks: Object.values(state.entities.notebooks),
        notes: Object.values(state.entities.notes),
        currentUser: state.entities.users[state.session.id]
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchNotebooks: () => dispatch(fetchNotebooks()),
        fetchNotebook: id => dispatch(fetchNotebook(id)),
        createNote: (note, notebookId) => dispatch(createNote(note, notebookId)),
        fetchNotes: () => dispatch(fetchNotes()),
        logout: () => dispatch(logout()), 
        makeNewNote: () => dispatch(makeNewNote())
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));