import React from 'react';
import { Link } from 'react-router-dom';

class WelcomePage extends React.Component {
   constructor(props) {
       super(props);
       this.handleDemoLogin = this.handleDemoLogin.bind(this);
   };

   handleDemoLogin(e) {
       e.preventDefault();
       const user = {email:"garfield1@gmail.com", password: "password" }
       this.props.login(user);
   };

   render () {
       return (
           <div>
             <div className="wp-container">
             <div className="header-container">
               <Link to="/" className="catflix">CATFLIX</Link>
               <Link className="login-link" to="/login">Sign In</Link>
             </div>
               <div className="inner-container">
               <h1 className="wp-h1">Unlimited cute cat movies, TV </h1>
               <h1 className="wp-h1"> shows, and more.</h1>
                <h3 className="wp-h3">Enjoy the cuteness anywhere. Watch anytime.</h3>
                <button className="demo-button" onClick={this.handleDemoLogin}>TRY DEMO FREE</button>
               </div>
             </div>
           </div>
       )
   }
};

export default WelcomePage;