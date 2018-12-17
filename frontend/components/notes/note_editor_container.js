import { fetchNote, createNote, updateNote, deleteNote } from '../../actions/note_actions';
import NoteEditor from './note_editor';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownParams) => {
    let notebookId = ownParams.match.params.notebookId;
    let notebook = state.entities.notebooks[notebookId];
    return ({
        notebook
        // currentUser: state.entities.users[state.session.id]
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchNote: id => dispatch(fetchNote(id)),
        createNote: note => dispatch(createNote(note)),
        updateNote: note => dispatch(updateNote(note)),
        deleteNote: noteId => dispatch(deleteNote(noteId))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteEditor));