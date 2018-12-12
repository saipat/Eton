import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';

const Greeting = ({ currentUser, logout }) => {
    const ifUser = () => (
        <div>
            <h2>Hello, {currentUser.email}</h2>
            <button onClick={logout}>Log Out</button>
        </div>
    );
    const noUser = () => (
        <div className="nav-bar">
            <div className="nav-left">
                <img src="/assets/eton_logo.png" alt="eton_logo" className="eton-logo" />
                <h1>Eton</h1>   
            </div>
            
            <div className="nav-right">
                <Link to='/signup' className="e-links signup-link">Sign Up</Link>
                <p className="or">or</p>
                <Link to='/login' className="e-links login-link">Log In</Link>
            </div>
        </div>
    );

    return currentUser ? ifUser() : noUser();
};

export default Greeting;