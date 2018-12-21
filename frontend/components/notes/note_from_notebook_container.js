import { fetchNotes, fetchNote, createNote, updateNote, deleteNote, fetchCurrentNote } from '../../actions/note_actions';
import NoteIndex from './note_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
 

    return ({
        notes: Object.values(state.entities.notes)
          
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchNotes: (notebookId) => dispatch(fetchNotes(notebookId)),
        fetchNote: id => dispatch(fetchNote(id)),
        createNote: (note, notebookId) => dispatch(createNote(note, notebookId)),
        updateNote: note => dispatch(updateNote(note)),
        fetchCurrentNote: note => dispatch(fetchCurrentNote(note)),
        deleteNote: noteId => dispatch(deleteNote(noteId))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteIndex));