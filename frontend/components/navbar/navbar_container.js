import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { searchVideos  } from '../../actions/video_actions';

import NavBar from './navbar';

const mstp = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.currentUser],
        
    }
};

const mdtp = (dispatch) => {
    return {
        logout: user => dispatch(logout(user)),
        searchVideos: (query) => dispatch(searchVideos(query))
    }
};

export default withRouter(connect(mstp,mdtp)(NavBar));