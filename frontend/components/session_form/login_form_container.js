import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, deleteErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mstp = (state) => {
  return {
      errors: state.errors.session,
      formType: 'Sign In',
    navLink: <div>New to Catflix?<Link className="navlink" to="/signup">Sign Up now</Link></div>
     }
};

const mdtp = (dispatch) => {
    return {
      submitForm: (user) => dispatch(login(user)),
      deleteErrors: (errors) => dispatch(deleteErrors(errors))
    }
};

export default connect(mstp,mdtp)(SessionForm);