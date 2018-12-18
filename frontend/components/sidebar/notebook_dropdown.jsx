import React from 'react';
import NoteIndexItem from '../notes/note_index_item'

class NotebookDropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showNotes: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        // console.log("Dropdown is clicked!!!");
        
        // this.setState({
        //     showNotes: true
        // });
    }

    render(){
        let lists = this.props.notebooks.map((notebook) => {
            return (

                <li key={notebook.id} className="list-name"><i className="fa fa-book" onClick={this.handleClick}></i>{notebook.name}</li>

            )
        });

        let component;
        if(this.state.showNotes){
            component = <NoteIndexContainer note={this.props.notes} />;
        }
        return(
                <div>
                    {lists}
                   
                </div>
            
        );
    }
}

export default NotebookDropdown;