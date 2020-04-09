import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup, deleteErrors, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mstp = (state) => {
    return {
        errors: state.errors.session,
        formType: 'Sign Up',
        navLink: <div><span className="navlink-comment">Already have an account? </span><Link className="navlink" to="/login">Sign In</Link></div>
    }
};

const mdtp = (dispatch) => {
    return {
        submitForm: (user) => dispatch(signup(user)),
        deleteErrors: (errors) => dispatch(deleteErrors(errors)),
        login: (user) => dispatch(login(user))
    }
};

export default connect(mstp, mdtp)(SessionForm);