import { fetchNotes, fetchNote, createNote, updateNote, deleteNote } from '../../actions/note_actions';
import NoteIndex from './note_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    if (!state.entities.notes){
        state.entities.notes = [];
    }

    return ({
        notes: Object.values(state.entities.notes)
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchNotes: () => dispatch(fetchNotes()),
        fetchNote: id => dispatch(fetchNote(id)),
        createNote: (note, notebookId) => dispatch(createNote(note, notebookId)),
        updateNote: note => dispatch(updateNote(note)),
        deleteNote: noteId => dispatch(deleteNote(noteId))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteIndex));