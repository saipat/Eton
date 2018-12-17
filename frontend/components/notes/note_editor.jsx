import React from 'react';
// import NotebookIndexContainer from '../notebooks/notebook_index_container'

class NoteEditor extends React.Component{
    constructor(props){
        super(props);

        this.deleteNote = this.deleteNote.bind(this);
        this.saveNote = this.saveNote.bind(this);
    }

    deleteNote() {

    }

    saveNote() {

    }

    render(){
        return (
            <div className="editor">
                <form className="e-form">
                    <div className="e-div-top">
                        <button className="e-trash" onClick={this.deleteNote}><i className="fa fa-trash-o"></i></button>
                        <button onClick={this.saveNote}className="e-save" onClick={this.saveNote}>Save</button>
                    </div>
               
                    <input type="text" placeholder="Note Title"></input>
                    <br></br>
                    <br></br>
                    <br></br>
                    <textarea placeholder="Type notes content in here" ></textarea>
                </form>
                    <div className="footer">
                    <form className="footer-form">
                        <button className="e-tag">
                            <i className="fa fa-tag"></i>Add Tag
                        </button>
                        <input type="text" className="e-input" />
                    </form>
                    
                    </div>
            </div>
        )
    }
}


export default NoteEditor;




