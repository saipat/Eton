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
        // console.log("clicked note title!!");
        return e => this.setState({
            showNote: true
        });
    }

    render() {
        return (
            <div className="note-index-item">
                <div className="each-note">
                    <h4 onClick={this.clickNote()}>{(this.props.note.title ? this.props.note.title : 'Untitled')}</h4>
                    <p>preview</p>
                </div>
                
            </div>
           
        );
    }
}

export default NoteIndexItem;