import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mstp = (state) => {
    return {
        errors: state.errors.session,
        formType: 'Sign Up',
        navLink: <Link to="/login">Sign In</Link>
    }
};

const mdtp = (dispatch) => {
    return {
        submitForm: (user) => dispatch(signup(user))
    }
};

export default connect(mstp, mdtp)(SessionForm);