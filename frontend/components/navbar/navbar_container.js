import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';

const mstp = (state) => {
    return {
        // return as currentusers state like this {id: 9, email: "email@email"}
        currentUser: state.entities.users[state.session.currentUser]
    }
};

const mdtp = (dispatch) => {
    return {
        logout: user => dispatch(logout(user))
    }
};

export default connect(mstp,mdtp)(NavBar);