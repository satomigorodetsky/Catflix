import React from 'react';

class WelcomePage extends React.Component {
   constructor(props) {
       super(props);
       this.handleDemoLogin = this.handleDemoLogin.bind(this);
   };

   handleDemoLogin(e) {
       const user = {email:"secretdemouser@gmail.com", password: "notsosecret" }
       e.preventDefault();
       this.props.login(user);
   };

   render () {
       return (
           <div className="wb-container">
                <h1 className="wb-h1">Unlimited cute cat movies, TV shows, and more.</h1>
                <h3 className="wb-h3">Enjoy the cuteness anywhere. Watch anytime.</h3>
                <button className="demo-button" onClick={this.handleDemoLogin}>Try for FREE</button>
           </div>
       )
   }
};

export default WelcomePage;