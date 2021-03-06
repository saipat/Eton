import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearAllErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = state => {
    return ({
        errors: state.errors.session,
        formType: "Sign Up",
        navLink: <Link to="/login">Log in</Link>
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        processForm: user => dispatch(signup(user)),
        demo: (user) => dispatch(login(user)),
        clearAllErrors: () => dispatch(clearAllErrors())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);