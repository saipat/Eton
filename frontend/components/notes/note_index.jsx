import React from 'react';
import NoteIndexItem from './note_index_item';

class NotebookIndex extends React.Component {
    constructor(props) {
        super(props);
       
    }

    render() {
        let notes = this.props.notes.map( note => {
            <NoteIndexItem 
                key={note.title}
                note={note}
            />
        });

        return(
            <div>
                <h2>All Notes</h2>
                {notes}
            </div>
        );
    }

}

export default NotebookIndex;