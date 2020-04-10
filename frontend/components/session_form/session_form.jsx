import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component{
   constructor(props) {
       super(props);
       this.state = {
          email: '',
          password: '', 
          errors: {
             email_hover: false,
             password_hover: false,
             email_blank: false,
             password_blank: false
         }
        }
       this.handleSubmit = this.handleSubmit.bind(this);
       this.updateEmail = this.updateEmail.bind(this);
       this.updatePassword = this.updatePassword.bind(this);
       this.handleDemoLogin = this.handleDemoLogin.bind(this);
   };

   componentDidMount() {
       this.props.deleteErrors(this.props.errors);
   }
   focusField(field) {
       let value;
       return () => this.setState({
           [field]: !(this.state.errors[field])
       });
   };

   blurField(field) {
       let hoverValue = field === "password" ? "password_hover" : "email_hover";
       let blankValue = field === "password" ? "password_blank" : "email_blank";

       return (e) => {
           // email or password
           if (this.state.field === "") {
              return this.setState({
                   errors: {  
                   [hoverValue]: !(this.state.errors[hoverValue]),
                   [blankValue]: true 
                  }
                });
           } else if (field === "password" && this.state.password.length < 4 ) {
              return  this.setState({
                   errors: {
                       [hoverValue]: !(this.state.errors[hoverValue]),
                       [blankValue]: true 
                   }
               });        
           } 
           else if (field === "email" && this.state.email.length < 1 ){
              return this.setState({
                   errors: {
                       [hoverValue]: !(this.state.errors[hoverValue]),
                       [blankValue]: true 
                   }
               });
           } else {
               return this.setState({
                   errors: {
                       [hoverValue]: !(this.state.errors[hoverValue]),
                       [blankValue]: false
                   }
               });
           }
       }
   }

   updateEmail(e) {
       if (e.target.value.length < 1 ) {
           return ( 
           this.setState({
               email: e.target.value,
               password: this.state.password,
               errors: {
                   email_blank: true
               }
           }));
       } else {
           return (
           this.setState({
               email: e.target.value,
               password: this.state.password,
               errors: {
                   email_blank: false
               }
           })
           );
       }
   }

   updatePassword(e) {
       if (e.target.value.length < 4 ) {
          return this.setState({
               email: this.state.email,
               password: e.target.value,
               errors: {
                   password_blank: true
               }
           });
       } else {
           return this.setState({
               email: this.state.email,
               password: e.target.value,
               errors: {
                   password_blank: false 
               }
           });
       }
   }
   
   handleSubmit(e) {
       e.preventDefault();
       const user = Object.assign({},this.state);
       this.props.submitForm(user)
    //    this.setState({
    //        email: '',
    //        password: ''
    //    })
   };

    handleDemoLogin(e) {
        e.preventDefault();
        const user = { email: "garfield1@cat.com", password: "password" }
        this.props.login(user);
    };

   render (){
       let invalidCredentials = this.props.errors.user ? (
           <div className="invalid-credentials-error">
               {this.props.errors.user}
           </div>) : ''

        let emailError = this.state.errors.email_blank ? <div 
        className="error">Please enter a valid email.</div> : "";
        let passwordError = this.state.errors.password_blank ? <div
        className="error">Your password must contain between 4 and 60 characters.</div> : "";

        let signupEmailError = this.props.errors.email ? <span className="error">{this.props.errors.email}</span> : "";
        let signupPasswordError = this.props.errors.password ? <span className="error">{this.props.errors.password}</span> : "";

       let emailInputClass = this.state.errors.email_blank ? "input-email input-error" : "input-email";
       let passwordInputClass = this.state.errors.password_blank ? "input-password input-error" : "input-password";

       return (
           <div>
           <div className="session-form-container">  
           <div className="header-container">
            <Link className="catflix-session-form" to="/">CATFLIX</Link>
            <button className="demo-button-session" onClick={this.handleDemoLogin}>TRY DEMO</button>
            </div>

               <form className="modal-form" onSubmit={this.handleSubmit}>
               <div className="contents">
               <h1 className="form-name">{this.props.formType}</h1>
               { invalidCredentials }

                <input type="text"
                value={this.state.email}
                onChange={this.updateEmail}
                onFocus={this.focusField("email_hover")}
                onBlur={this.blurField("email")}
                className={emailInputClass}
                placeholder="  Email" />
               <br/>
               {signupEmailError || emailError }
               <br/>
               <input type="password"
               value={this.state.password} 
               onChange={this.updatePassword}
               onFocus={this.focusField("password_hover")}
               onBlur={this.blurField("password")} 
               className={passwordInputClass} 
               placeholder="  Password"/>
               <br/>
               {signupPasswordError || passwordError }
               <br/>
               <button className="submit-button">{this.props.formType}</button>
                   <div className="navlink-line">
                       {this.props.navLink}
                   </div> 
                </div>
               </form>
                   <div className="footer-session-container">
                       <h3 className="question" >Questions? Contact me.</h3>          
                      <div className="footer-session-links">
                       <a className="github" href="https://github.com/Sokada101">GitHub</a>
                       <a href="https://www.linkedin.com/in/satomiokada/">LinkedIn</a>
                       <a href="https://brooklynanimalaction.org/">SaveCats</a>
                       </div>
                   </div>
           </div>
           </div>
       )
   }
};

export default SessionForm;