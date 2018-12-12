import * as Session_Util from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = currentUser => ({
    type: 'RECEIVE_CURRENT_USER',
    currentUser
});

const logoutCurrentUser = () => ({
    type: 'LOGOUT_USER'
});

const receiveErrors = errors => ({
    type: 'RECEIVE_SESSION_ERRORS',
    errors
});


export const login = user => dispatch => (
    Session_Util.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
        err => dispatch(receiveErrors(err.responseJSON)))
);

export const signup = user => dispatch => (
    Session_Util.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
        err => {
            return dispatch(receiveErrors(err.responseJSON));
        })
);

export const logout = () => dispatch => (
    Session_Util.logout()
    .then(() => dispatch(logoutCurrentUser()))
);

export const demoUserLogin = () => (
    Session_Util.demoUser()
    .then(user => dispatch(receiveCurrentUser(user)),
    err => { 
        return dispatch(receiveErrors(err.responseJSON));
    })
);