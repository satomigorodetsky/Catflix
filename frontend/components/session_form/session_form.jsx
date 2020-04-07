import React from 'react';

class SessionForm extends React.Component{
   constructor(props) {
       super(props);
       this.state = {
          email: '',
          password: ''
       }
       this.handleSubmit = this.handleSubmit.bind(this);
   };

   update(field) {
       return e => this.setState({
           [field]: e.currentTarget.value
       })
   };

   renderErrors() {
       const errorsLi = this.props.errors.map((error,i) => {
           return (
               <li key={`error-${i}`}>
                  {error}
               </li>
           )
       });
       return (
           <ul>
              {errorsLi}
           </ul>
       )
   };
   
   handleSubmit(e) {
       e.preventDefault();
       const user = Object.assign({},this.state);
       this.props.submitForm(user);
   };

   // this.props.navLink will be added soon  

   render (){
       return (
           <div className="session-form-container">
               <form onSubmit={this.handleSubmit}>
               <h1 className="form-name">{this.props.form}</h1>
               {this.renderErrors()}
               <input type="text" 
               value={this.state.email}
               onChange={this.update('email')} 
               className="input-email" 
               placeholder="  Email" />
               <br/>
               <input type="password"
               value={this.state.password} 
               onChange={this.update('password')} 
               className="input-password" 
               placeholder="  Password"/>
               <br/>
               <button className="submit-button">{this.props.formType}</button>
               </form>
           </div>
       )
   }
};

export default SessionForm;