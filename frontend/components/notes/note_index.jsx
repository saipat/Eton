import React from 'react';
import NoteIndexItem from './note_index_item';
import NoteEditorContainer from './note_editor_container';


class NoteIndex extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        // notebook:this.props.notebook
        this.state = {
            showMessage: this.props.notes.length === 0,
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
        // if(this.props.selectedNotebook){
            // this.props.fetchNotes(this.props.match.params.notebookId);
        // }
        // else{
        this.props.fetchNotes(this.props.match.params.notebookId);
        // }s
    }

    closeButton(){
        this.setState({
           showMessage: false
        });
    }

    render() {
        console.log("note_index line 43")
        let notes = this.props.notes.map( note => (
            <NoteIndexItem 
                key={note.id}
                note={note}
                setSelectedNote={this.setSelectedNote}
            />
    ));
        let notes_length = notes.length;

        if(this.state.showMessage) {
            notes = (<div className="welcome">
                        <div className="welcome-head">
                            <p>Welcome to Eton</p>
                            <button onClick={this.closeButton}><i className="fa fa-close"></i></button>
                        </div>
                        <p className="click">Click + to create a new note.</p>
                    </div>)
        }

        return(
            <div>
                <div className="notes-index">
                    <h2>All Notes</h2>
                    <div className="header">
                        <span className="notes-count">{notes_length} Notes</span>
                        <div className="header-btns">
                            <button><i className="fa fa-sort-amount-desc"></i></button>
                            <button><i className="fa fa-tag"></i></button>
                        </div>
                    </div>
                    { notes } 
                </div>
                <div className="editor">
                    <NoteEditorContainer />
                </div>
            </div>
        );
    }

}

export default NoteIndex;