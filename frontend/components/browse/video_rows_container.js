import { connect } from 'react-redux';
import VideoRows from './video_rows';
import { addToMyList, removeFromMyList } from '../../actions/list_video_actions';

const mstp = (state, ownProps) => {
    return {
        videos: Object.values(state.entities.videos),
    }
};

const mdtp = (dispatch) => {
    return {
        addToMyList: (videoId) => dispatch(addToMyList(videoId)),
        removeFromMyList: (videoId) => dispatch(removeFromMyList(videoId))
    }
};

export default connect(mstp, mdtp)(VideoRows);