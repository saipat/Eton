import React from 'react';
import NoteEditor from './note_editor';
// import NoteEditorContainer from './note_editor_container';

class NoteIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showNote: false
        };

        console.log("this.props in note index item", this.props);
        
        this.showNote = this.showNote.bind(this);
        // this.clickNote = this.clickNote.bind(this);
    }

    // clickNote(){
    //     return e => this.setState({
    //         showNote: true
    //     });
    // }

    showNote(){
        console.log("hi inside note index item");       
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