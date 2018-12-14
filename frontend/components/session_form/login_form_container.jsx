import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearAllErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = state => {
    return ({
        errors: state.errors.session,
        formType: "Log In",
        navLink: <Link to="/signup">Sing Up</Link>
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        processForm: (user) => dispatch(login(user)),
        demo: (user) => dispatch(login(user)),
        clearAllErrors: () => dispatch(clearAllErrors())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);