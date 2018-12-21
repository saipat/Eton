import React from 'react';

class EditNotebookForm extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            notebook: this.props.notebook
        };
        
        this.closeForm = this.closeForm.bind(this);
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
    }

    closeForm() {
        this.props.closeModal();
    }

    handleEditSubmit() {
        this.props.updateNotebook(this.state.notebook)
            .then(() => this.props.history.push('/notebooks'));
        this.closeForm();
    }

    update() {
        let nb = this.state.notebook;
        return e => {
            nb.name = e.currentTarget.value;
            this.setState({
                notebook: nb
            });
        };
    }

    render(){
        
        return(
            <div className="renameNotebook">
                <div className="e-form-top">
                    <h2>Rename notebook</h2>
                    <button onClick={this.closeForm} className="e-close-btn"><i className="fa fa-close edit-close"></i></button>
                    
                </div>

                <form onSubmit={this.handleEditSubmit} className="e-nb-form">
                    <label>
                        Name
                        <br></br>
                        <input type="text" value={this.state.notebook.name} onChange={this.update()} placeholder={this.state.name} className="input"/>
                    </label>
                    <div className="line"></div>
                    <div className="nf-btn">
                        <button onClick={this.closeForm} className="btns">Close</button>
                        <input type="submit" value="Continue"  className="btns"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditNotebookForm;