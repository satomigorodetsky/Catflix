import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import NavBar from './navbar';

const mstp = (state) => {
    return {
    }
};

const mdtp = (dispatch) => {
    return {
        login: user => dispatch(login(user))
    }
};

export default connect(mstp,mdtp)(NavBar);