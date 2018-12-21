import { fetchNote, createNote, updateNote, fetchCurrentNote} from '../../actions/note_actions';
import { createTag, deleteTag } from '../../actions/tag_actions';
import NoteEditor from './note_editor';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => {
    // let notebookId = ownProps.match.params.notebookId;
    // let notebook = state.entities.notebooks[notebookId];
    // let noteId = ownProps.match.params.noteId;
    // let note = state.entities.notes[noteId];

    console.log("NoteEditorContainer State>>>>>>>", state);

    return ({
        currentNote: state.entities.notes[state.ui.currentNoteId]
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchNote: id => dispatch(fetchNote(id)),
        createNote: (note, notebookId) => dispatch(createNote(note, notebookId)),
        updateNote: note => dispatch(updateNote(note)), 
        createTag: tag => dispatch(createTag(tag)),
        deleteTag: tagId => dispatch(deleteTag(tagId))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteEditor));