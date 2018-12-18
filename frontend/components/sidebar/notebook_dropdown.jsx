import React from 'react';
import NoteIndexItem from '../notes/note_index_item';
import NoteIndexContainer from '../notes/note_index_container';

class NotebookDropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showNotes: false          
        };
        // console.log("props: ", this.props);
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(notebook) {
        return e => {
            // console.log("Dropdown is clicked!!!");
            this.setState({
                selectedNotebook: notebook,
                showNotes: true
            });
            console.log("inside handleClick in dropdown---> ", this.state);
            
            // this sets the selectedNotebook in "Sidebar's" state 
            this.props.setSelectedNotebook(notebook);
        };
    }

    render(){
        let lists = this.props.notebooks.map((notebook) => {
            return (
                <li key={notebook.id} className="list-name" onClick={this.handleClick(notebook)}><i className="fa fa-book"></i>{notebook.name}</li>
            )
        });

        let component;
        if(this.state.showNotes){
            component = <NoteIndexContainer note={this.props.notes} selectedNotebook={this.state.selectedNotebook} />;
            // FIXME: also need to show NoteEditor here
        }
        return(
                <div>
                    {lists}                   
                </div>
            
        );
    }
}

export default NotebookDropdown;