import React from 'react';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: this.props.currentUser,
            logout: this.props.logout
        };
    }

    componentDidMount() {
        this.props.fetchNotebooks();
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
                            <i class="fa fa-sticky-note-o"></i>All Notes
                        </button>
                   </div>
                    <div>
                        <button className="notebook-btn"><i className="fa fa-caret-right"></i><i className="fa fa-book"></i>Notebook</button>
                    </div>
                </div>
                <div>hi</div>
                <div>di</div>
            </div>
            
        )
    }

}

export default Sidebar;
