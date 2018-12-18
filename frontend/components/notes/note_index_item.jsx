import React from 'react';

class NoteIndexItem extends React.Component {
    constructor(props) {
        super(props);
        
        // console.log("inside NoteIndexItem -------", this.props);
    }

    render() {
        return (
            <div>
                <p>{(this.props.note.title ? this.props.note.title : 'Untitled')}</p>
            </div>
           
        );
    }
}

export default NoteIndexItem;