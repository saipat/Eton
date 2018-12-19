import React from 'react';
import notebookReducer from '../../reducers/notebook_reducer';


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
            rich_txt_body: e.currentTarget.value
        });
    }

    render(){
        return (
            <div className="editor">
                <form className="e-form" onSubmit={this.saveNote}>
                    <div className="e-div-top">
                        <button className="e-trash" onClick={this.deleteNote}><i className="fa fa-trash-o"></i></button>
                        <input type="submit" className="e-save"  value="Save"/>
                    </div>
                    {/* <div>{this.props.notebook.name}</div> */}
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




