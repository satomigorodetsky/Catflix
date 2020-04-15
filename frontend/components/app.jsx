import React from 'react';
import WelcomePageContainer from './welcome_page/welcome_page_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './navbar/navbar_container';
import { Route,Switch } from 'react-router-dom';
import VideoIndexContainer from '../components/browse/video_index_container';
import VideoShowContainer from '../components/browse/video_show_container';
import VideoTypeContainer from '../components/browse/video_type_container';

// change from protected Route to Auth Route 
// after making navBar
const App = () => (
   <div>
     <header>
     </header>
     <Switch>
     <ProtectedRoute path="/browse/tvshows" component={VideoTypeContainer} />
      <ProtectedRoute path="/browse/movies" component={VideoTypeContainer} />
     <ProtectedRoute exact path="/browse" component={VideoIndexContainer} />
     <ProtectedRoute path="/browse/:videoId" component={VideoShowContainer} />
     <AuthRoute exact path="/login" component={LoginFormContainer}/>
     <AuthRoute exact path="/signup" component={SignupFormContainer} />
     <AuthRoute path ="/" component={WelcomePageContainer} />
     </Switch>
   </div>
);

export default App;