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
        <div className="greetings-Links">
            <Link to='/signup' className="gLinks">Sign Up</Link>
            <Link to='/login' className="gLinks">Log In</Link>
        </div>
    );

    return currentUser ? ifUser() : noUser();
};

export default Greeting;