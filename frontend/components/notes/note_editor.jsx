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
       
        // this.deleteNote = this.deleteNote.bind(this);
        this.saveNote = this.saveNote.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
    }

    deleteNote() {
        // console.log("this.state.id", this.state);
        // this.props.deleteNote(this.state.id);
    }

    // parsetHTML() {
    //     let text = getDocumentElementById();

    // }

    

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
        return e => {
            console.log(e);
            
            this.setState({
            plain_txt_body: e,
            rich_txt_body: e
        });
    };
    }

    render(){
        return (
            <div className="editor">
                <form className="e-form" onSubmit={this.saveNote}>
                    <div className="quill-top">
                        <div className="e-div-top">
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
                        <ReactQuill placeholder="Type notes content in here" onChange={this.updateBody()} modules={modules} value={this.state.rich_txt_body} defaultValue={this.state.plain_txt_body} className="quill-body" id="quillText"/>
                    </div>
                    
                </form>
                    <div className="footer">
                    <form className="footer-form">
                        <div className="e-tag">
                            <button className="inside-tag"><i className="fa fa-plus "></i></button>
                            <i className="fa fa-tag tag-editor"></i>
                            <input type="text" placeholder="Add Tag" className="e-input" />
                        </div>
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




