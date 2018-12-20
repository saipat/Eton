import React from 'react';

class NoteIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showNote: false
        };
        console.log("inside NoteIndexItem constructor", this.props);
        this.clickNote = this.clickNote.bind(this);
        // this.deleteNote = this.deleteNote.bind(this);
        
    }

    clickNote(){
        console.log("clicked note with note_id ----", this.props);
        return e => this.setState({
            showNote: true
        });
        
    }

    // deleteNote(){
        
    //     this.props.deleteNote(this.props.note.id)
    //         .then(() => this.props.history.push('/notes'));
    // }

    render() {
        // console.log("this.props.note------inside line 26:", this.props.note);
        return (
            <div className="note-index-item">
                <div className="each-note">
                    <div className="title-close">
                        <h4 onClick={this.clickNote()}>{(this.props.note.title ? this.props.note.title : 'Untitled')} </h4>
                        <button className="c-trash" 
                        onClick={() => this.props.deleteNote(this.props.note.id)}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </div>
                    <p>{this.props.note.plain_txt_body}</p>
                    {/* <p>{this.props.note.rich_txt_body}</p> */}
                </div>
                
            </div>
           
        );
    }
}

export default NoteIndexItem;