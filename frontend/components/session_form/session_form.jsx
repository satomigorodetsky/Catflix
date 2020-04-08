import React from 'react';
import { Redirect } from 'react-router-dom';

class SessionForm extends React.Component{
   constructor(props) {
       super(props);
       this.state = {
          email: '',
          password: ''
       }
       this.handleSubmit = this.handleSubmit.bind(this);
   };

   componentDidMount() {
       this.props.deleteErrors(this.props.errors);
   }

   update(field) {
       return e => this.setState({
           [field]: e.currentTarget.value
       })
   };

   renderErrors() {
       const errorsLi = this.props.errors.map((error,i) => {
           return (
               <li className="error-lists" key={`error-${i}`}>
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
       this.props.submitForm(user)
       this.setState({
           email: '',
           password: ''
       })
   };

   render (){
       return (
           <div className="session-form-container">  
               <div className="catflix">CATFLIX</div>    
               <form className="modal-form" onSubmit={this.handleSubmit}>
                <div className="contents">
               <h1 className="form-name">{this.props.formType}</h1>
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
                   <div className="navlink-line">
                       {this.props.navLink}
                   </div> 
                </div>
               </form>
              
           </div>
       )
   }
};

export default SessionForm;