import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup, deleteErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mstp = (state) => {
    return {
        errors: state.errors.session,
        formType: 'Sign Up',
        navLink: <div>Already have an account?<Link className="navlink" to="/login">Sign In</Link></div>
    }
};

const mdtp = (dispatch) => {
    return {
        submitForm: (user) => dispatch(signup(user)),
        deleteErrors: (errors) => dispatch(deleteErrors(errors))
    }
};

export default connect(mstp, mdtp)(SessionForm);