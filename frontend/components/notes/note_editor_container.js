import { fetchNote, createNote, updateNote, deleteNote } from '../../actions/note_actions';
import NoteEditor from './note_editor';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
    let notebookId = ownProps.match.params.notebookId;
    let notebook = state.entities.notebooks[notebookId];
    let noteId = ownProps.match.params.noteId;
    let note = state.entities.notes[noteId];
    return ({
        notebook, 
        note
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