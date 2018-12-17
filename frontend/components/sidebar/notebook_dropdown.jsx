import React from 'react';
import NoteIndexItem from '../notes/note_index_item'

class NotebookDropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notebooks: props.notebooks,
            showNotes: false, 
            notes: props.notes
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            showNotes: true
        });
    }

    render(){
        console.log("Inside dropdown -------", this.state);
        let lists = this.state.notebooks.map((notebook) => {
            return (

                <li key={notebook.id} className="list-name"><i className="fa fa-book" onClick={this.handleClick}></i>{notebook.name}</li>

            )
        });
        let component;
        if(this.state.showNotes){
            component = <NoteIndexContainer note={notes} />;
        }
        return(
                <div>
                    {lists}
                    {component}
                </div>
            
        );
    }
}

export default NotebookDropdown;