import React from 'react';
import NotebookIndexContainer from '../notebooks/notebook_index_container';
import NoteIndexContainer from '../notes/note_index_container';
import NotebookDropdown from './notebook_dropdown'; 
import NoteEditorContainer from '../notes/note_editor_container';
import { logout } from '../../actions/session_actions';
import NoteIndexItem from '../notes/note_index_item';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: this.props.currentUser,
            logout: this.props.logout,
            showMenu: false,
            showNotebooks: false,
            showEditor: false,
            showNotes: false,
            // notes: this.props.notes,
            // notes: [{title: 'note 1'}]
        };

        
        
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.showNotebooks = this.showNotebooks.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createNewNote = this.createNewNote.bind(this);
        this.saveNote = this.saveNote.bind(this);
        this.showNotesClick = this.showNotesClick.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
    }

    componentDidMount() {
        this.props.fetchNotebooks();
        this.props.fetchNotes();
    }

    showMenu(event) {
        event.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

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

    createNewNote() {
        this.setState({
            showEditor: true
        });
        this.setState({
            showNotebooks: false
        });
    }

    saveNote() {

    }

    showNotesClick() {
        console.log("I clicked u!!!!");
        console.log(this.props.notes);
        
        this.setState({
            showNotes: true,
            showNotebooks: false
        });
        // console.log("this.props.fetchNotes()");
        // this.props.fetchNotes();
    }

    logoutUser() {
        return (e) => {
            e.preventDefault();
            this.props.logout();
            this.props.history.push('/');
        };
    }

    render() {
        console.log("Inside render in Sidebar ------", this.props.notes);

        if (this.props.notebooks === undefined) {
            return null;
        }
        const notebooks = Object.values(this.props.notebooks);

        // let displayNotes;
        // if(this.state.showNotes){
        //     debugger
        //     displayNotes = <NoteIndexItem notes={this.state.notes} />;
        // }
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
                    <div className="new-btn">
                        <button className="new-note" onClick={this.createNewNote}><i className="fa fa-plus"></i>New Note</button>
                    </div>
                    <div className="divs">
                        <button className="star-btn"><i className="fa fa-caret-right"></i><i className="fa fa-star fa_custom"></i>Shortcuts</button>
                   </div>
                    <div className="divs">
                        <button className="all-notes-btn" onClick={this.showNotesClick}>
                            <i className="fa fa fa-bookmark-o" ></i>All Notes
                        </button>
                   </div>

                    <div className="divs">
                        <button className="button-dropdown" onClick={this.handleSubmit}>
                            <i className="fa fa-caret-right"></i>
                            <i className="fa fa-book"></i>
                             Notebooks
                         </button>
                        {
                            this.state.showMenu ? 
                            (
                                    <ul className="dropdown-menu" ref={(element) => {
                                        this.dropdownMenu = element;
                                    }}
                                    >
                                    
                                     <NotebookDropdown notebooks={notebooks} notes={this.props.notes}/>
                                    
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

                { this.state.showNotebooks ? <div    className="notbook-grid"><NotebookIndexContainer /></div> : <div   className="note-grid">
                        {this.state.showNotes}
                        <div className="notes">
                            <NoteIndexContainer notes={this.props.notes} />
                        </div>
                    {   this.state.showEditor ? 
                            <NoteEditorContainer notes={this.props.notes} notebooks={this.props.notebooks}/> 
                             : 
                            <div></div>
                        
                    }
                     
                    </div>
                }
               
            </div>
            
        )
    }

}

export default Sidebar;
