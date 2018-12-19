import React from 'react';
import NotebookIndexContainer from '../notebooks/notebook_index_container';
import NotebookDropdownContainer from './notebook_dropdown_container'; 
import NoteEditorContainer from '../notes/note_editor_container';
import { logout } from '../../actions/session_actions';
import NoteIndexItem from '../notes/note_index_item';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: this.props.currentUser,
            logout: this.props.logout,
            showMenu: false,
            showNotebooks: false,
            showEditor: false,
            // showNotes: false,
            // notes: [{title: 'note 1'}, [{title: ""}]],
            // selectedNotebook: null
        };
        // debugger
        // this.props.notebooks.forEach((notetbook) => {
        //     if (notebook.title === '<inbox>'){
        //         this.state.selectedNotebook = notebook;
        //     }
        // });

        // console.log("inside sidebar constructor----", this.props);
        
        
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.showNotebooks = this.showNotebooks.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.createNewNote = this.createNewNote.bind(this);
        this.saveNote = this.saveNote.bind(this);
        // this.showNotesClick = this.showNotesClick.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
        this.setSelectedNotebook = this.setSelectedNotebook.bind(this);
    }

    setSelectedNotebook(notebook) {
        this.setState({selectedNotebook: notebook});
    }

    componentDidMount() {
        this.props.fetchNotebooks();
    }

    showMenu(event) {
        event.preventDefault();
        this.setState({ showMenu: true });
    }

//     , () => {
//     document.addEventListener('click', this.closeMenu);
// }

    closeMenu(event) {
        if (!this.dropdownMenu.contains(event.target)) {

            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }

    handleSubmit(event){
        event.preventDefault();
        this.showMenu(event);
        this.showNotebooks(); 
    }

    showNotebooks(){
        this.setState({
            showNotebooks: true
        });
    }

    // createNewNote() {
    //     this.setState({
    //         showEditor: true
    //     });
    //     this.setState({
    //         showNotebooks: false
    //     });
    // }

    saveNote() {

    }

    // showNotesClick() {
    //     this.setState({
    //         showNotes: true,
    //         showNotebooks: false
    //     });
    // }

    logoutUser() {
        return (e) => {
            e.preventDefault();
            this.props.logout();
            this.props.history.push('/');
        };
    }

    render() {
        // console.log("Inside render in Sidebar ------", this.props.notes);

        if (this.props.notebooks === undefined) {
            return null;
        }
        return (
            <div className="grid-container">
                <div className="sidebar">
                    <div className="sd-title">
                        <img src={window.sidebarLogoURL} alt="sidebar_logo" className="sidebar-logo" />
                        <h3>{this.state.currentUser.email}</h3>
                    </div>
                    <form className="sd-search">
                        <input type="search" placeholder="search all values" className="sd-search-input"></input>
                        <button type="submit" id="search-icon"><i className="fa fa-search"></i></button>
                    </form>
                    <div className="new-note">
                       <Link to="/notes" ><i className="fa fa-plus"></i>New Note</Link>
                    </div>
                    <div className="divs">
                        <button className="star-btn"><i className="fa fa-caret-right"></i><i className="fa fa-star fa_custom"></i>Shortcuts</button>
                   </div>
                    <div className="divs all-notes">
                        <Link to="/notes" className="all-notes-btn"><i className="fa fa fa-bookmark-o"></i>
                            All Notes
                        </Link>
                   </div>

                    <div className="divs">
                        <button className="button-dropdown" onClick={this.handleSubmit}>
                            <i className="fa fa-caret-right"></i>
                            <i className="fa fa-book"></i>
                            <Link to="/notebooks">Notebooks</Link>
                         </button>
                        {
                            this.state.showMenu ? 
                            (
                                    <ul className="dropdown-menu" ref={(element) => {
                                        this.dropdownMenu = element;
                                    }}
                                    >
                                    
                                     <NotebookDropdownContainer />
                                    
                                </ul>
                            ) : ( null ) 
                        }
                    </div>

                    <div className="divs">
                        <button className="tags-btn">
                            <i className="fa fa-tag"></i>Tags
                        </button>
                    </div>
                    <div className="divs">
                        <button className="trash-btn">
                            <i className="fa fa-trash-o"></i>Trash
                        </button>
                    </div>
                    <div>
                        <button className="signout-btn" onClick={this.logoutUser()}><i className="fa fa-sign-out"></i>Sign Out</button>
                    </div> 
                </div>

                 
               
            </div>
            
        )
    }

}

export default Sidebar;
