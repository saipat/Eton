import React from 'react';

class CreateNotebookForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: ''
        };
        
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
        // console.log("hi");
        this.closeForm();
    }

    render(){
        return <div className="createForm">
				<div className="form-top">
					<h2>Create New Notebook</h2>
					<button onClick={this.closeForm} className="close-btn">
						<i className="fa fa-close create-close" />
					</button>
				</div>
				<p>
					Notebooks are useful for grouping notes around a common topic. They can be private or
					shared.
				</p>
				<form onSubmit={this.handleSubmit} className="new-nb-form">
					<label>
						Name
						<br />
						<input type="text" value={this.state.name} onChange={this.update()} placeholder="Notebook name" className="input" />
					</label>
					<div className="line" />
					<div className="nf-btn">
						<button onClick={this.closeForm} className="btns">
							Close
						</button>
						<button type="submit" className="btns">Continue
						</button>
					</div>
				</form>
			</div>;
    }
}

export default CreateNotebookForm;