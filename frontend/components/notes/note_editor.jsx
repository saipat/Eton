import React from 'react';
import notebookReducer from '../../reducers/notebook_reducer';
import ReactQuill from 'react-quill';


class NoteEditor extends React.Component{
    constructor(props){
        super(props);

        this.state = {
                title: '', 
                plain_txt_body: '',
                rich_txt_body: '',
                notebook_id: this.props.notebookId,
        };

        console.log("this.props in note editor", this.props);
        
        this.saveNote = this.saveNote.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.update = this.update.bind(this);

        this.quillRef = React.createRef();
    }

    componentDidUpdate(prevProps) {
        if(this.props.currentNote !== prevProps.currentNote && this.props.currentNote) {
            this.setState({
                title: this.props.currentNote.title,
                id: this.props.currentNote.id,
                plain_txt_body: this.props.currentNote.plain_txt_body,
                rich_txt_body: this.props.currentNote.rich_txt_body
            });
        }    
    }

    saveNote(e) {
        e.preventDefault();
        this.props.createNote(this.state, this.state.notebook_id);
        this.update();
        alert("Note Saved!");
    }

    updateTitle(event){
        this.setState({
            title:  event.target.value
        });
    }

    updateBody(value) {
            this.setState({
                rich_txt_body: value
            });            
            if(this.quillRef.current && this.quillRef.current.getEditor()) {
                this.setState({
                    plain_txt_body: this.quillRef.current.getEditor().getText(0)
                });
            }
        }
    
     update(){
        this.updateTitle();
        this.updateBody();
    }

    render(){
        console.log("note editor rener: ");
        return (
            <div className="editor">
                <form className="e-form" onSubmit={this.saveNote}>
                    <div className="quill-top">
                        <div className="e-div-top">
                            <input type="submit" className="e-save"  value="Save"/>
                        </div>
                        {/* <div>{this.props.notebook.name}</div> */}
                        <div>
                            <input type="text" placeholder="Note Title" onChange={this.updateTitle} value={this.state.title} 
                            className="note-title" />
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="quill-div">
                        <ReactQuill placeholder="Type note content in here" onChange={this.updateBody} modules={modules} value={this.state.rich_txt_body} className="quill-body" id="quillText" ref={this.quillRef} />
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




