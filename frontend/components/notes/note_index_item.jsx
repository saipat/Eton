import React from 'react';
import NoteEditor from './note_editor';

class NoteIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showNote: false
        };
        
        this.showNote = this.showNote.bind(this);
    }

    showNote(){   
        this.props.fetchCurrentNote(this.props.note);
    }

    render() {
        return (
            <div>
                <div className="note-index-item">
                    <div className="each-note">
                        <div className="title-close">
                            <h4 onClick={this.showNote}>{(this.props.note.title ? this.props.note.title : 'Untitled')} </h4>
                            <button className="c-trash"
                                onClick={() => this.props.deleteNote(this.props.note.id)}>
                                <i className="fa fa-trash-o"></i>
                            </button>
                        </div>                        
                        <p>{this.props.note.plain_txt_body.slice(0,20) + '...'}</p>
                    </div>

                </div>
                
            </div>
            
           
        );
    }
}

export default NoteIndexItem;