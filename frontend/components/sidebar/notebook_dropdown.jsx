import React from 'react';
import NoteIndexItem from '../notes/note_index_item';

import { Link } from 'react-router-dom';

class NotebookDropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showNotes: false,     
        };
        console.log("props inside notebook dropdown: ", props);
    }

    render(){

        let lists = this.props.notebooks.map((notebook) => {
            return (
                <li className="nb-links">
                    <Link to={`/notebook/${notebook.id}/notes`} >
                        {notebook.name}
                    </Link>
                </li>
            )
        });

        return(
                <div>
                    {lists}
                </div>
            
        );
    }
}

export default NotebookDropdown;