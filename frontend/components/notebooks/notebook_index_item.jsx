import React from 'react';

import {
    formatDate,
    formatTime,
    formatDateTime
} from '../../util/date_util';


const NotebookIndexItem = props => {
    let created_at = formatTime(props.notebook.created_at);
    console.log(created_at);
    
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>{props.notebook.name}</td>
                        <td> - </td>
                        <td>{props.notebook.updated_at}</td>
                        <td>Only you</td>
                        <td>...</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

   


export default NotebookIndexItem;