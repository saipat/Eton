import React from 'react';

import { formatTime } from '../../util/date_util';


class NotebookIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notebook: props.notebook
        };
        this.myFunction = this.myFunction.bind(this);
    }

myFunction() {
    var x = document.getElementById("Demo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

    render(){
        let updated_at = formatTime(this.state.notebook.updated_at);
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td className="nb-name"><i className="fa fa-caret-right"></i>{this.state.notebook.name}</td>
                            <td className="nb-create"> - </td>
                            <td className="nb-update">{updated_at}</td>
                            <td className="nb-only">Only you</td>
                            <td className="nb-u"><button onClick={this.myFunction}>...</button></td>
                        </tr>
                    </tbody>
                </table>
                <div id="Demo" className="w3-dropdown-content w3-bar-block w3-border">
                    <a href="#" className="w3-bar-item w3-button">Rename Notebook</a>
                    <a href="#" className="w3-bar-item w3-button">Delete Notebook</a>
                </div>
            </div>
        )
    }
}


   


export default NotebookIndexItem;