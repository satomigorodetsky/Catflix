import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, deleteErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mstp = (state) => {
  return {
      errors: state.errors.session,
      formType: 'Sign In',
    navLink: <div><span className="navlink-comment">New to Catflix?</span><Link className="navlink" to="/signup">Sign up now</Link></div>
     }
};

const mdtp = (dispatch) => {
    return {
      submitForm: (user) => dispatch(login(user)),
      deleteErrors: (errors) => dispatch(deleteErrors(errors)),
      login: (user) => dispatch(login(user))
    }
};

export default connect(mstp,mdtp)(SessionForm);