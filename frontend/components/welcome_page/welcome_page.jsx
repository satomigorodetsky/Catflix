import React from 'react';
import { Link } from 'react-router-dom';

class WelcomePage extends React.Component {
   constructor(props) {
       super(props);
       this.handleDemoLogin = this.handleDemoLogin.bind(this);
   };

   handleDemoLogin(e) {
       e.preventDefault();
       const user = {email:"garfield1@cat.com", password: "password" }
       this.props.login(user);
   };

   render () {
       return (
           <div>
             <div className="wp-container">
             <div className="header-container">
               <div className="catflix">CATFLIX</div>
               <Link className="login-link" to="/login">Sign In</Link>
             </div>
               <div className="inner-container">
               <h1 className="wp-h1">Unlimited cute cat movies, TV </h1>
               <h1 className="wp-h1"> shows, and more.</h1>
                <h3 className="wp-h3">Enjoy the cuteness anywhere. Watch anytime.</h3>
                <button className="demo-button" onClick={this.handleDemoLogin}>TRY A FREE DEMO</button>
               </div>
              <div className="footer-wp-container">
               <h3 className="question" >Questions? <a className="email" href="mailto:satomiokada100@gmail.com" target="_blank" rel="noopener noreferrer">Contact Me.</a></h3>          
               <div className="footer-wp-links">
                 <a className="github" href="https://sokada101.github.io/" target="_blank">Portfolio</a>
                 <a href="https://www.linkedin.com/in/satomiokada/" target="_blank">LinkedIn</a>
                 <a href="https://github.com/Sokada101" target="_blank">GitHub</a>
                 <a href="https://brooklynanimalaction.org/" target="_blank">SaveCats</a>
               </div>
             </div>
             </div>
           </div>
       )
   }
};

export default WelcomePage;