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

const removeNotebooks = notebookId => ({
    type: REMOVE_NOTEBOOK,
    notebookId
});

export default fetchNotebooks = () => dispatch => (
    NotebookAPIUtil.fetchNotebooks()
    .then(notebooks => dispatch(receiveALLNotebooks(notebooks)))
);
export default fetchNotebook = notebook => dispatch => (
    NotebookAPIUtil.fetchNotebook(notebook)
    .then(notebook => dispatch(receiveNotebook(notebook)))
);
export default createNotebook = notebook => dispatch => (
    NotebookAPIUtil.createNotebook(notebook)
    .then(notebook => dispatch(receiveNotebook(notebook)))
);
export default updateNotebook = notebook => dispatch => (
    NotebookAPIUtil.updateNotebook(notebook)
    .then(notebook => dispatch(receiveNotebook(notebook)))
);
export default deleteNotebook = notebookId => dispatch => (
    NotebookAPIUtil.deleteNotebook(notebookId)
    .then(notebookId => dispatch(removeNotebooks(notebookId)))
);