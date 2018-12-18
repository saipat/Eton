import { fetchNotes, fetchNote, createNote, updateNote, deleteNote } from '../../actions/note_actions';
import NoteIndex from './note_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state,ownProps) => {
    if (!state.entities.notes){
        state.entities.notes = [];
    }

    return ({
        notes: ownProps.notes
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchNotes: () => dispatch(fetchNotes()),
        fetchNote: id => dispatch(fetchNote(id)),
        createNote: note => dispatch(createNote(note)),
        updateNote: note => dispatch(updateNote(note)),
        deleteNote: noteId => dispatch(deleteNote(noteId))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteIndex));