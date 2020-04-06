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
   
   handleSubmit(e) {
       e.preventDefault();
       const user = Object.assign({},this.state);
       this.props.submitForm(user);
   };

   render (){
       return (
           <div className="session-form-container">
               <form onSubmit={this.handleSubmit}>
               <h1>{this.props.form}</h1>

               </form>
           </div>
       )
   }
};

export default SessionForm;