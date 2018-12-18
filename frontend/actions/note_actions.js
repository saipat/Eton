import * as NoteAPIUtil from '../util/note_api_util';

export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";

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

export const fetchNotes = () => dispatch => (
    NoteAPIUtil.fetchNotes()
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