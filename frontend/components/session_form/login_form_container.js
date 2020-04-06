import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mstp = (state) => {
  return {
      errors: state.errors.session,
      formType: 'Log In',
      navLink: <Link to="/signup">Sign Up now</Link>
     }
};

const mdtp = (dispatch) => {
    return {
      submitForm: (user) => dispatch(login(user))
    }
};

export default connect(mstp,mdtp)(SessionForm);