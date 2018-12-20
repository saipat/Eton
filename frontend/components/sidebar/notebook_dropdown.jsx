import React from 'react';
import NoteIndexItem from '../notes/note_index_item';
// import NoteIndexContainer from '../notes/note_index_container';
import { Link } from 'react-router-dom';

class NotebookDropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showNotes: false,     
        };
        console.log("props inside notebook dropdown: ", props);
        
        // this.handleClick = this.handleClick.bind(this);
        // this.showAllNotes = this.showAllNotes.bind(this);
    }

    
    //selectedNotebook: notebook,
    // this sets the selectedNotebook in "Sidebar's" state 
    // this.props.setSelectedNotebook(notebook);

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

// {/* <i className="fa fa-book"></i> */}
        // let component;
        // if(this.state.showNotes){
        //     component = <NoteIndexContainer note={this.props.notes}  />;
        // }
            // selectedNotebook={this.state.selectedNotebook}
            // FIXME: also need to show NoteEditor here
    
        return(
                <div>
                    {lists}
                </div>
            
        );
    }
}

export default NotebookDropdown;