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
                notebook_id: this.props.notebookId                                
        };

        this.tag = {

        };

        console.log("this.props in note editor", this.props);
        
        this.saveNote = this.saveNote.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.update = this.update.bind(this);
        this.newTag = this.newTag.bind(this);
        this.quillRef = React.createRef();
    }

    componentDidUpdate(prevProps) {
        console.log("componentDidUpdate", this.props.currentNote);
        
        if(this.props.currentNote !== prevProps.currentNote && this.props.currentNote) {
            let state = {
                title: this.props.currentNote.title,
                id: this.props.currentNote.id,
                plain_txt_body: this.props.currentNote.plain_txt_body,
                rich_txt_body: this.props.currentNote.rich_txt_body
            };
            // sets the first tag
            if (this.props.currentNote.tags && this.props.currentNote.tags.length > 0) {
                console.log(">>>>>", this.props.currentNote.tags[0]);
                state.tag = this.props.currentNote.tags[0].tag_name;                
            }
            this.setState(state);
            
        }   
    }

    saveNote(e) {
        e.preventDefault();
        if(this.state.id){
            this.props.updateNote(this.state);
            // .then((res) => {
            //         const tag = {
            //             tag_name: this.tag,
            //             note_ids: [res.note.id]
            //         };
            //         this.props.createTag(tag);
            //     });
        }else{
            this.props.createNote(this.state, this.state.notebook_id);
            // .then((res) => {
            //     const tag = {
            //         tag_name: this.tag, 
            //         note_ids: [res.note.id]
            //     };
            //     this.props.createTag(tag);
            // });
        }
        this.update();
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

    newTag(e){
        this.setState({
            tag: e.target.value
        });        
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
                        <div>
                            <input type="text" placeholder="Note Title" onChange={this.updateTitle} value={this.state.title} 
                            className="note-title"/>
                        </div>
                            {/* <div>{this.props.currentNotebookTitle}</div> */}
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
                            <input type="text" placeholder="Add Tag" className="e-input" onChange={this.newTag} value={this.state.tag}/>
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




