import React from 'react';
import { connect } from 'tls';

class EditNotebookForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notebook: this.props.notebook
        };
        this.closeForm = this.closeForm.bind(this);
    }

    componentDidMount(){
        this.props.fetchNotebook(this.props.match.params.notebookId);
    }

    closeForm(event) {
        event.preventDefault();
        this.props.closeModal();
    }

    render(){
        return(
            <div className="renameNotebook">
                <div>
                    <h2>Rename notebook</h2>
                    <button onClick={this.closeForm}><i class="fa fa-times"></i></button>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input type="text" value={this.state.notebook.name} onChange={this.update} placeholder={this.state.notebook.name}/>
                    </label>
                    <div>
                        <button onClick={this.closeForm}>Close</button>
                        <input type="submit" value="Continue" />
                    </div>
                </form>
            </div>
        )
    }
}

export default EditNotebookForm;