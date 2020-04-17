import { connect } from 'react-redux';
import { fetchVideos, clearVideos } from '../../actions/video_actions';
import VideoMain from './video_main';

const mstp = (state) => {
    return {
        // videos: state.entities.videos
        videos: Object.values(state.entities.videos)
    }
};

const mdtp = (dispatch) => {
    return {
        fetchVideos: () => dispatch(fetchVideos()),
        clearVideos: () => dispatch(clearVideos())

    }
};

export default connect(mstp, mdtp)(VideoMain);