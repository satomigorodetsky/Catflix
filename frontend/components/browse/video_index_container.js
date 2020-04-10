import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos } from '../../actions/video_actions';

const mstp = (state) => {
    return {
     videos: state.videos
    }
};

const mdtp = (dispatch) => {
    return {
        fetchVideos: () => dispatch(fetchVideos())
    }
};

export default connect(mstp,mdtp)(VideoIndex);