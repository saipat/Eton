import * as NotebookAPIUtil from '../util/notebook_api_util';

export const RECEIVE_NOTEBOOKS = 'RECEIVE_NOTEBOOKS';
export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';
export const REMOVE_NOTEBOOK = 'REMOVE_NOTEBOOK';

const receiveALLNotebooks = notebooks => ({
    type: RECEIVE_NOTEBOOKS,
    notebooks
});

const receiveNotebook = notebook => ({
    type: RECEIVE_NOTEBOOK,
    notebook
});

const removeNotebooks = notebook => ({
    type: REMOVE_NOTEBOOK,
    notebook
});

export const fetchNotebooks = () => dispatch => (
    NotebookAPIUtil.fetchNotebooks()
    .then(notebooks => dispatch(receiveALLNotebooks(notebooks)))

    // dispatch(receiveALLNotebooks([{},{},{}]))
);
export const fetchNotebook = id => dispatch => (
    NotebookAPIUtil.fetchNotebook(id)
    .then(notebook => dispatch(receiveNotebook(notebook)))
);
export const createNotebook = notebook => dispatch => (
    NotebookAPIUtil.createNotebook(notebook)
    .then(notebook => dispatch(receiveNotebook(notebook)))
);
export const updateNotebook = notebook => dispatch => (
    NotebookAPIUtil.updateNotebook(notebook)
    .then(notebook => dispatch(receiveNotebook(notebook)))
);
export const deleteNotebook = notebookId => dispatch => (
    NotebookAPIUtil.deleteNotebook(notebookId)
    .then(notebook => dispatch(removeNotebooks(notebook)))
);