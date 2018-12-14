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

    // jQuery(document).ready(function(e) {
    //     function t(t) {
    //         e(t).bind("click", function (t) {
    //             t.preventDefault();
    //             e(this).parent().fadeOut()
    //         })
    //     }
    //     e(".dropdown-toggle").click(function () {
    //         var t = e(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");
    //         e(".button-dropdown .dropdown-menu").hide();
    //         e(".button-dropdown .dropdown-toggle").removeClass("active");
    //         if (t) {
    //             e(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("active")
    //         }
    //     });
    //     e(document).bind("click", function (t) {
    //         var n = e(t.target);
    //         if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();
    //     });
    //     e(document).bind("click", function (t) {
    //         var n = e(t.target);
    //         if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("active");
    //     })
    // });



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
                   
                    <div className="dropdown">
                        <button className="dropbtn">
                            <i className="fa fa-caret-right"></i><i className="fa fa-book"></i>
                            Notebook
                        </button>
                        <div className="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div> 
                    <div>
                        <button className="button-dropdown">
                        <a href="javascript:void(0)" className="dropdown-toggle">
                             <i className="fa fa-caret-right"></i>
                                <i className="fa fa-book"></i>
                             Notebook
                         </a>
                        <ul className="dropdown-menu">
                        <li>
                            <a href="#">
                             <i className="fa fa-book"></i>
                            Drop Item 1
                            </a>
                        </li>
                        <li>
                            <a href="#"> <i className="fa fa-book"></i>
                            Drop Item 2
                            </a>
                        </li>
                        <li>
                            <a href="#"> <i className="fa fa-book"></i>
                            Drop Item 3
                            </a>
                        </li>
                        </ul>
                    </button>

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
                <div>di</div>
            </div>
            
        )
    }

}

export default Sidebar;
