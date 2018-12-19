export const fetchNotes = (notebook_id) => {
    return $.ajax({
        method: 'GET',
        url: `api/notebooks/${notebook_id}/notes`,
        data: {
            notebook_id: notebook_id
        }
    });
};

export const fetchAllNotes = () => {
     return $.ajax({
         method: 'GET',
         url: 'api/all_notes',
     });
    
}

export const fetchNote = id => {
    return $.ajax({
        method: 'GET',
        url: `api/notes/${id}`,
    });
};

export const createNote =  (note, notebookId) => (
    $.ajax({
        method: 'POST',
        url: `api/notebooks/${notebookId}/notes`,
        data: {note},
    })
);

export const updateNote = note => {
    return $.ajax({
        method: 'PATCH',
        url: `api/notes/${note.id}`,
        data: {note},
    });
};

export const deleteNote = id => {
    return $.ajax({
        method: 'DELETE',
        url: `api/notes/${id}`,
    });
};

