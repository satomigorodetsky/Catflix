import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';

const mstp = (state) => {
    return {
    }
};

const mdtp = (dispatch) => {
    return {
        logout: user => dispatch(logout(user))
    }
};

export default connect(mstp,mdtp)(NavBar);