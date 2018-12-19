import React from 'react';
import notebookReducer from '../../reducers/notebook_reducer';
import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';


class NoteEditor extends React.Component{
    constructor(props){
        super(props);

        this.state = {
                title: '', 
                plain_txt_body: '',
                rich_txt_body: '',
                notebook_id: this.props.notebookId                
        };
       
        this.deleteNote = this.deleteNote.bind(this);
        this.saveNote = this.saveNote.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
    }

    deleteNote() {

    }

    saveNote(e) {
        e.preventDefault();
        this.props.createNote(this.state, this.state.notebook_id);
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
            rich_txt_body: e.currentTarget.defaultValue
        });
    }

    render(){
        return (
            <div className="editor">
                <form className="e-form" onSubmit={this.saveNote}>
                    <div className="quill-top">
                        <div className="e-div-top">
                            <button className="e-trash" onClick={this.deleteNote}><i className="fa fa-trash-o"></i></button>
                            <input type="submit" className="e-save"  value="Save"/>
                        </div>
                        {/* <div>{this.props.notebook.name}</div> */}
                        <div>
                            <input type="text" placeholder="Note Title" onChange={this.updateTitle()} defaultValue={this.state.title} className="note-title" />
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="quill-div">
                        <ReactQuill placeholder="Type notes content in here" onChange={this.updateBody()} modules={modules} value={this.state.rich_txt_body} className="quill-body" />
                    </div>
                    
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
const toolBarOpts = [
    [{ font: [] }],
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    ["blockquote", "code-block"],
    [{ align: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    ["clean"],
    ["link", "image", "video", "formula"]
];

const modules = {
    toolbar: toolBarOpts
}


export default NoteEditor;




