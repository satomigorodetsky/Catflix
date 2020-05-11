import { connect } from 'react-redux';
import VideoRows from './video_rows';

const mstp = (state, ownProps) => {
    return {
        videos: Object.values(state.entities.videos),
    }
};

const mdtp = (dispatch) => {
    return {

    }
};

export default connect(mstp, mdtp)(VideoRows);