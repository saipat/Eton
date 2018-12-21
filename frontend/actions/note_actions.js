import * as NoteAPIUtil from '../util/note_api_util';
// import { CURRENT_NOTEBOOK } from './notebook_actions';

export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const CURRENT_NOTE = "CURRENT_NOTE";
export const CLOSE_CURRENT_NOTE = 'CLOSE_CURRENT_NOTE';
export const MAKE_NEW_NOTE = 'MAKE_NEW_NOTE';

const receiveAllNotes = notes => ({
    type: RECEIVE_NOTES,
    notes
});

const receiveNote = note => ({
    type: RECEIVE_NOTE,
    note
});

const removeNote = noteId => ({
    type: REMOVE_NOTE,
    noteId
});

export const fetchCurrentNote = currentNote => ({
    type: CURRENT_NOTE,
    currentNote
});

export const closeCurrentNote = () => {
    return {
        type: CLOSE_CURRENT_NOTE
    };
};

export const makeNewNote = () => ({
    type: MAKE_NEW_NOTE
});

export const fetchNotes = (notebookId) => dispatch => (
    NoteAPIUtil.fetchNotes(notebookId)
    .then(notes => dispatch(receiveAllNotes(notes)))
);

export const fetchAllNotes = () => dispatch => (
    NoteAPIUtil.fetchAllNotes()
    .then(notes => dispatch(receiveAllNotes(notes)))
);

export const fetchNote = id => dispatch => (
    NoteAPIUtil.fetchNote(id)
    .then(note => dispatch(receiveNote(note)))
);

export const createNote = (note, notebookId) => dispatch => (
    NoteAPIUtil.createNote(note, notebookId)
    .then(note => dispatch(receiveNote(note)))
);

export const updateNote = note => dispatch => (
    NoteAPIUtil.updateNote(note)
    .then(note => dispatch(receiveNote(note)))
);

export const deleteNote = noteId => dispatch => (
    NoteAPIUtil.deleteNote(noteId)
    .then(noteId => dispatch(removeNote(noteId)))
);