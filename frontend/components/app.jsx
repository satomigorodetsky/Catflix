import React from 'react';
import { Route } from 'react-router-dom';
import WelcomePageContainer from './welcome_page/welcome_page_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import WelcomePage from './welcome_page/welcome_page';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

// change from protected Route to Auth Route 
// after making navBar
const App = () => (
   <div>
     <header>
      <h1>CATFLIX</h1>
     </header>
     <ProtectedRoute exact path="/login" component={LoginFormContainer}/>
     <ProtectedRoute exact path="/signup" component={SignupFormContainer} />
     <Route exact path ="/" component={WelcomePageContainer} />
   </div>
);

export default App;