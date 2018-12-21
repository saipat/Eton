import React from 'react';

class CreateNotebookForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: ''
        };
        // console.log(this.state);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.closeForm  =this.closeForm.bind(this);
    }

    update() {
        return e => this.setState({
            name: e.currentTarget.value
        });
    }
    
    closeForm(){
        this.props.closeModal();
    }

    handleSubmit(){
        const notebook = {name: this.state.name, user_id: this.props.currentUser.id};
        this.props.createNotebook(notebook);
        this.closeForm();
    }

    render(){
        return (
            <div className="createForm">
                <div className="form-top">
                    <h2>Create New Notebook</h2>
                    <button onClick={this.closeForm} className="close-btn"><i className="fa fa-close"></i></button>
                </div>
                <p>Notebooks are useful for grouping notes around a common topic. They can be private or shared.</p>
                <form onSubmit={this.handleSubmit} className="new-nb-form">
                    <label>
                        Name
                        <br></br>
                        <input type="text" value={this.state.name} onChange={this.update()} placeholder="Notebook name" className="input" />
                    </label>
                    <div className="line"></div>
                    <div className="nf-btn">
                        <button onClick={this.closeForm}className="btns">Close</button>
                        <input type="submit" value="Continue"
                        className="btns"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateNotebookForm;