import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SidebarContainer from './sidebar/sidebar_container';

const App = () => (
    <div className="main">
        <div>
            <Switch>
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <ProtectedRoute path="/side" component={SidebarContainer} />
                <Route path="/" component={GreetingContainer} />
            </Switch>
        </div>

    </div>
);

export default App;


