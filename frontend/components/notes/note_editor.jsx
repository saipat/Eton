import React from 'react';
// import NotebookIndexContainer from '../notebooks/notebook_index_container'

class NoteEditor extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="editor">
                <div className="e-div-top">
                    <button className="e-trash"><i className="fa fa-trash-o"></i></button>
                </div>
                <button onClick={this.saveNote}className="e-save">Save</button>
                <form>
                    <input type="text"></input>
                </form>
                <textarea placeholder="Type notes content in here"></textarea>
            </div>
        )
    }
}


export default NoteEditor;




