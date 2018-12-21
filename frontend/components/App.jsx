import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SidebarContainer from './sidebar/sidebar_container';
import NotebookModalContainer from './notebooks/notebook_modal_container';
import AllNotesContainer from './notes/all_notes_container';
import NoteFromNotebookContainer from './notes/note_from_notebook_container';
import NotebookIndexContainer from './notebooks/notebook_index_container';
import TagsIndexContainer from './tags/tags_index_container';


const App = () => (
    <div className="main">
        <div className="top-level">
            <NotebookModalContainer />
            <ProtectedRoute path="/" component={SidebarContainer} />
            <Switch>
                <ProtectedRoute path="/notebook/:notebookId/notes" component={NoteFromNotebookContainer} />
                <ProtectedRoute path="/notebooks" component={NotebookIndexContainer} />
                <ProtectedRoute path="/notes" component={AllNotesContainer}/>
                <ProtectedRoute path="/tags" component={TagsIndexContainer}/>
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <Route exact path="/" component={GreetingContainer} />
                <Redirect to="/" component={GreetingContainer} />
            </Switch>
        </div>

    </div>
);

export default App;


