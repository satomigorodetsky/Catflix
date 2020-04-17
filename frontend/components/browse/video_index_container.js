import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos, clearVideos } from '../../actions/video_actions';

const mstp = (state) => {
    return {
     videos: Object.values(state.entities.videos)
    }
};

const mdtp = (dispatch) => {
    return {
        fetchVideos: () => dispatch(fetchVideos()),
        clearVideos: () => dispatch(clearVideos())
    }
};

export default connect(mstp,mdtp)(VideoIndex);