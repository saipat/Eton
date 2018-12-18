import React from 'react';
import NoteIndexItem from './note_index_item';


class NoteIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMessage: this.props.notes.length === 0
        };
        this.closeButton = this.closeButton.bind(this);
        console.log("inside constructor in NoteIndex -----", this.props.notes);
        
    }

    closeButton(){
        this.setState({
           showMessage: false
        });
    }

    render() {
        // debugger
        console.log("inside render in NoteIndex -------", this.props.notes);
        
        let notes = this.props.notes.map( note => (
            <NoteIndexItem 
                key={note.title}
                note={note}
            />
    ));
        // debugger
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
        );
    }

}

export default NoteIndex;