import React from 'react';
import { withRouter } from 'react-router-dom';
import { formatTime } from '../../util/date_util';


class NotebookIndexItem extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        //     notebook: this.props.notebook
        // };
        // console.log("inside index item-----", this.state);
        
        this.myFunction = this.myFunction.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.deleteClick = this.deleteClick.bind(this);
        this.clickNotebook = this.clickNotebook.bind(this);
    }

    myFunction() {
        var x = document.getElementById(`menu-${this.props.notebook.id}`);
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    }

    handleClick() {   
        // console.log("inside handle click-----", this.state.notebook);
        this.myFunction();
        this.props.openModal('editNotebook', this.props.notebook);
    }

    deleteClick(){
        this.myFunction();
        this.props.deleteNotebook(this.props.notebook.id);
            // .then(() => this.props.history.push('/notebooks'));
    }

    clickNotebook() {
        console.log("clicked the notebook inside th notebookindexitem!");
        
    }

    render(){
        let updated_at = formatTime(this.props.notebook.updated_at);
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td className="nb-name" onClick={this.clickNotebook}><i className="fa fa-caret-right"></i>{this.props.notebook.name}</td>
                            <td className="nb-create"> - </td>
                            <td className="nb-update">{updated_at}</td>
                            <td className="nb-only">Only you</td>
                            <td className="nb-u"><button onClick={this.myFunction}>...</button></td>
                        </tr>
                    </tbody>
                </table>
                <div id={`menu-${this.props.notebook.id}`} className="w3-dropdown-content w3-bar-block w3-border">
                    <a className="w3-bar-item w3-button" onClick={this.handleClick}>Rename Notebook</a>
                    <a className="w3-bar-item w3-button" onClick={this.deleteClick}>Delete Notebook</a>
                </div>
            </div>
        )
    }
}


   


export default withRouter(NotebookIndexItem);