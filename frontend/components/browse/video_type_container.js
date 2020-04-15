import { connect } from 'react-redux';
import VideoType from './video_type';
import {fetchVideos} from '../../actions/video_actions';
import { withRouter } from 'react-router';

const mstp = (state, ownProps) => {
    return {
        videos: Object.values(state.entities.videos),
    }
};

const mdtp = (dispatch) => {
    return {
        fetchVideos: () => dispatch(fetchVideos())
    }
};

export default withRouter(connect(mstp, mdtp)(VideoType));