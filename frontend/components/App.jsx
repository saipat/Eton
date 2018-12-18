import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SidebarContainer from './sidebar/sidebar_container';
import NotebookModalContainer from './notebooks/notebook_modal_container';
import NoteIndexContainer from './notes/note_index_container';

const App = () => (
    <div className="main">
        <div>
            <NotebookModalContainer />
                <ProtectedRoute path="/" component={SidebarContainer} />
            <Switch>
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <Route exact path="/" component={GreetingContainer} />
                <Redirect to="/" component={GreetingContainer} />
            </Switch>
        </div>

    </div>
);

export default App;


