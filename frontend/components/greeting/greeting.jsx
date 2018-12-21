import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import SidebarContainer from '../sidebar/sidebar_container';


class Greeting extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            currentUser: this.props.currentUser,
            logout: this.props.logout
        };
        this.noUser = this.noUser.bind(this);
        this.ifUser = this.ifUser.bind(this);
    }


    noUser(){
        return (
            <div>
            <div className="main">
                <div className="nav-bar">
                    <div className="nav-left">
                        <img src={window.etonLogoURL} alt="eton_logo" className="eton-logo" />
                        <h1>Eton</h1>
                    </div>

                    <div className="nav-right">
                        <Link to='/signup' className="e-links signup-link">Sign Up</Link>
                        <p className="or">or</p>
                        <Link to='/login' className="e-links login-link">Log In</Link>
                    </div>
                
                </div>
                <div className="eton_home_bg">
                    <div className="content">
                        <h2>Feel organized without the effort</h2>
                        <p>Evernote helps you capture and prioritize ideas, projects, and to-do lists, so nothing falls through the cracks.</p>
                            <button className="home-btn">Sign up for free</button>
                    </div>
                </div>
                <div className="below-bg">
                    <img src={window.brainURL} alt="brain image" className="brain-img" />
                    <h1>Focus on what matters most</h1>
                </div>
                <div className="below-brain">
                    <div className="div1 brain-div">
                        <p>Manage everything from big projects to personal moments.</p>
                    </div>
                    <div className="div2 brain-div">
                        Capture ideas and inspiration in notes, voice, and pictures.
                    </div>
                    <div className="div3 brain-div">
                        Never lose track of your tasks and deadlines.
                    </div>
                </div>
            </div>
                <div className="steps-div">
                    <img src={window.stepsURL} alt="steps image" className="steps-img"/>
                    <h1>At work, at home, and everywhere in between</h1>
                    <h2>Evernote’s plans and pricing are designed to fit your needs.</h2>
                </div>
                <div className="footer-row">
                        <p>Choose a language: English<i className="fa fa-caret-down"></i></p>
                        <img src={window.footerURL} alt="footer image" className="footer-image"></img>
                </div>
            </div>
        )
    };

    ifUser(){
        return(
        <div>
            <SidebarContainer />
        </div>
        )
    };

    render(){
        
        return (
             this.props.currentUser? this.ifUser() : this.noUser()
        )

    }
}



export default Greeting;