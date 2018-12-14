import React from 'react';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: this.props.currentUser,
            logout: this.props.logout,
            showMenu: false
        };
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    componentDidMount() {
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


    


    render() {
        if (this.props.notebooks === undefined) {
            return null;
        }
        let notebooks = Object.values(this.props.notebooks);
        let dropdown = document.getElementsByClassName("dropdown-btn");
        let i;

       
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
                   <div>
                        <button className="star-btn"><i className="fa fa-caret-right"></i><i className="fa fa-star fa_custom"></i>Shortcuts</button>
                   </div>
                   <div>
                        <button className="all-notes-btn">
                            <i className="fa fa fa-bookmark-o"></i>All Notes
                        </button>
                   </div>

                    <div>
                        <button className="button-dropdown" onClick={this.showMenu}>
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
                                    <li>
                                        <a href="http://localhost:3000/#/side">
                                            <i className="fa fa-book"></i>
                                            Drop Item 1
                                         </a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:3000/#/side">
                                            <i className="fa fa-book"></i>
                                            Drop Item 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:3000/#/side">
                                            <i className="fa fa-book"></i>
                                            Drop Item 1
                                        </a>
                                    </li>
                                    
                                </ul>
                            ) : ( null ) 
                        }
                       
                    </div>

                    
                    <div>
                        <button className="tags-btn">
                            <i className="fa fa-tag"></i>Tags
                        </button>
                    </div>
                    <div>
                        <button className="trash-btn">
                            <i className="fa fa-trash-o"></i>Trash
                        </button>
                    </div>
                </div>
                <div>hi</div>
            </div>
            
        )
    }

}

export default Sidebar;
