import React from 'react';

import {
    formatDate,
    formatTime,
    formatDateTime
} from '../../util/date_util';


class NotebookIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notebook: props.notebook
        };
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
                            <td className="nb-u">...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


   


export default NotebookIndexItem;