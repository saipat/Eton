import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute, Switch } from '../util/route_util.jsx';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

const App = () => (
    <div className="main">
        
        <div>
            <GreetingContainer />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </div>
    </div>
);

export default App;


