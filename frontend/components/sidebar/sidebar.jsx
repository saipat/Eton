import React from 'react';
import NotebookIndexContainer from '../notebooks/notebook_index_container';
import NotebookDropdown from './notebook_dropdown';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: this.props.currentUser,
            logout: this.props.logout,
            showMenu: false,
            showNotebooks: false
        };
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.showNotebooks = this.showNotebooks.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // debugger
        this.props.fetchNotebooks();
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
        // debugger
        event.preventDefault();
        this.showMenu(event);
        this.showNotebooks();
    }

    showNotebooks(){
        this.setState({
            showNotebooks: true
        });
    }

    render() {
        if (this.props.notebooks === undefined) {
            return null;
        }
        const notebooks = Object.values(this.props.notebooks);
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
                        <button className="new-note"><i className="fa fa-plus"></i>New Note</button>
                    </div>
                    <div className="divs">
                        <button className="star-btn"><i className="fa fa-caret-right"></i><i className="fa fa-star fa_custom"></i>Shortcuts</button>
                   </div>
                    <div className="divs">
                        <button className="all-notes-btn">
                            <i className="fa fa fa-bookmark-o"></i>All Notes
                        </button>
                   </div>

                    <div className="divs">
                        <button className="button-dropdown" onClick={this.handleSubmit}>
                            <i className="fa fa-caret-right"></i>
                            <i className="fa fa-book"></i>
                             Notebook
                         </button>
                        {
                            this.state.showMenu ? 
                            (
                                    <ul className="dropdown-menu" ref={(element) => {
                                        this.dropdownMenu = element;
                                    }}
                                    >
                                    
                                     <NotebookDropdown notebooks={notebooks} />
                                    
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
                </div>
                <div>
                    <NotebookIndexContainer />
                </div>
            </div>
            
        )
    }

}

export default Sidebar;
