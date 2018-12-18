export const fetchNotes = (notebook_id) => {
    return $.ajax({
        method: 'GET',
        url: 'api/notes',
        data: {
            notebook_id: notebook_id
        }
    });
};

export const fetchNote = id => {
    return $.ajax({
        method: 'GET',
        url: `api/notes/${id}`,
    });
};

export const createNote =  note => (
    $.ajax({
        method: 'POST',
        url: 'api/notes',
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

