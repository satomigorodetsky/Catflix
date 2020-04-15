import { connect } from 'react-redux';
import VideoMain from './video_main';

const mstp = (state) => {
    debugger
    return {
        // videos: state.entities.videos
        videos: Object.values(state.entities.videos)
    }
};

const mdtp = (dispatch) => {
    return {
    }
};

export default connect(mstp, mdtp)(VideoMain);