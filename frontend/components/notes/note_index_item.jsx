import React from 'react';

class NoteIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showNote: false
        };
        
        this.clickNote = this.clickNote.bind(this);
        // console.log("inside NoteIndexItem -------", this.props);
    }

    clickNote(){
        console.log("clicked note with note_id ----", this.props.note.id);
        return e => this.setState({
            showNote: true
        });
    }

    render() {
        console.log("this.props.note------inside line 26:", this.props.note);
        return (
            <div className="note-index-item">
                <div className="each-note">
                    
                    
                    <h4 onClick={this.clickNote()}>{(this.props.note.title ? this.props.note.title : 'Untitled')}</h4>
                    <p>{this.props.note.plain_txt_body}</p>
                    <p>{this.props.note.rich_txt_body}</p>
                </div>
                
            </div>
           
        );
    }
}

export default NoteIndexItem;