export const fetchNotebooks = () => (
    $.ajax({
        method: 'GET',
        url: 'api/notebooks'
    })
);

export const fetchNotebook = id => (
    $.ajax({
        method: 'GET',
        url: `api/notebook/${id}`
    })
);

export const createNotebook = notebook => (
    $.ajax({
        method: 'POST',
        url: 'api/notebooks',
        data: {notebook}
    })
);

export const updateNotebook = notebook => (
    $.ajax({
        method: 'PATCH',
        url: `api/notebook/${notebook.id}`,
        data: {notebook}
    })
);

export const deleteNotebook = notebookId => (
    $.ajax({
        method: 'DELETE',
        url: `api/notebook/${notebookId}`
    })
);