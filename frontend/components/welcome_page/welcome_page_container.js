import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import WelcomePage from './welcome_page';

const mstp = (state) => {
    return {
    }
};

const mdtp = (dispatch) => {
    return {
        login: (user) => dispatch(login(user))
    }
};

export default connect(mstp,mdtp)(WelcomePage);