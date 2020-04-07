import React from 'react';
import { Route } from 'react-router-dom';
import WelcomePageContainer from './welcome_page/welcome_page_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import WelcomePage from './welcome_page/welcome_page';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './navbar/navbar_container';
import { Switch } from 'react-router-dom';
import VideoIndexContainer from '../components/browse/video_index_container';

// change from protected Route to Auth Route 
// after making navBar
const App = () => (
   <div>
     <header>
     </header>
     <ProtectedRoute path="/browse" component={VideoIndexContainer} />
     <AuthRoute path="/login" component={LoginFormContainer}/>
     <AuthRoute path="/signup" component={SignupFormContainer} />
     <AuthRoute path ="/" component={WelcomePageContainer} />
   </div>
);

export default App;