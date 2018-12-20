import React from 'react';
import NoteIndexItem from './note_index_item';
import NoteEditorContainer from './note_editor_container';
import SidebarContainer from '../sidebar/sidebar_container';

class NoteIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showMessage: true,
            selectedNote: null
        };

        this.closeButton = this.closeButton.bind(this);
        this.setSelectedNote= this.setSelectedNote.bind(this);
        console.log("inside constructor in NoteIndex -----", this.props);
        
    }

    setSelectedNote(notebook) {
        this.setState({ selectedNote: note });
    }

    componentDidMount(){  
        this.props.fetchNotes(this.props.match.params.notebookId);
    }

    closeButton(){
        this.setState({
           showMessage: false
        });
    }

    render() {
        console.log("note_index line 43", this.props);
        let notes = this.props.notes.map( note => (
            <NoteIndexItem 
                key={note.id}
                note={note}
                deleteNote={this.props.deleteNote}
            />
    ));

        
        let notes_length = notes.length;

        if (notes.length === 0) {
            notes = (<div className="welcome">
                        <div className="welcome-head">
                            <p>Start creating notes</p>
                            <button onClick={this.closeButton}><i className="fa fa-close"></i></button>
                        </div>
                        <p className="click">Click + to create a new note.</p>
                    </div>)
        }

        return(
            <div className="notes-container">
                <div className="notes-index">
                    <h2>All Notes</h2>
                    <div className="header">
                        <span className="notes-count">{notes_length} Notes</span>
                        <div className="header-btns">
                            <button><i className="fa fa-sort-amount-desc"></i></button>
                        </div>
                    </div>
                    <div className="display-notes">
                        {notes} 
                    </div>
                    
                </div>
                <div className="editor">
                    <NoteEditorContainer notebookId={this.props.match.params.notebookId}
                    />
                </div>
            </div>
        );
    }

}

export default NoteIndex;