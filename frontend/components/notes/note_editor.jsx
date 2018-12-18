import React from 'react';
import notebookReducer from '../../reducers/notebook_reducer';
// import NotebookIndexContainer from '../notebooks/notebook_index_container'

class NoteEditor extends React.Component{
    constructor(props){
        super(props);

        this.state = {
       
                title: '', 
                plain_txt_body: '',
                rich_txt_body: ''
        
        };
        // console.log("inside noteEditor constructor, this.state.note =>", this.state);
        // console.log("inside noteEditor constructor, this.state.note.title =>", this.state.title);
        // console.log("what is props/", this.props);

       
        
        this.deleteNote = this.deleteNote.bind(this);
        this.saveNote = this.saveNote.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
    }

    deleteNote() {

    }

    saveNote() {
        console.log("clicked Save!!!");
        console.log(this.props);
        // if(!this.props.note.notebook.id){
        //     this.props.note.notebook.id = 1;
        // }
        this.props.createNote(this.state);
        this.updateTitle();
        this.updateBody();
    }

    updateTitle(){
        
        return e => this.setState({
            title: e.currentTarget.value
        });
    }

    updateBody() {
        return e => this.setState({
            plain_txt_body: e.currentTarget.value ,
           rich_txt_body: e.currentTarget.value
        });
    }

    render(){
        return (
            <div className="editor">
                <form className="e-form">
                    <div className="e-div-top">
                        <button className="e-trash" onClick={this.deleteNote}><i className="fa fa-trash-o"></i></button>
                        <button onClick={this.saveNote} className="e-save" >Save</button>
                    </div>
               
                    <input type="text" placeholder="Note Title" onChange={this.updateTitle()} value={this.state.title}/>
                    
                    <br></br>
                    <br></br>
                    <br></br>
                    <textarea placeholder="Type notes content in here" onChange={this.updateBody()} value={this.state.plain_txt_body}></textarea>
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




