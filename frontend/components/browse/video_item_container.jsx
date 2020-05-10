import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import VideoItem from './video_item';
import { fetchListVideos, clearVideos } from '../../actions/video_actions';
import { addToMyList, removeFromMyList } from '../../actions/list_video_actions';

const mstp = (state, ownProps) => {
    debugger
    const users = state.entities.users
    const currentUserId = state.session.currentUser
    return {
        users,
        currentUserId,
        videos: Object.values(state.entities.videos),
        errors: state.errors.list,
        // onlist: users[currentUserId].listVideoIds.includes(ownProps.video.id) ? true : false 
    }
};

const mdtp = (dispatch) => {
    return {
        fetchListVideos: () => dispatch(fetchListVideos()),
        clearVideos: () => dispatch(clearVideos()),
        addToMyList: (videoId) => dispatch(addToMyList(videoId)),
        removeFromMyList: (videoId) => dispatch(removeFromMyList(videoId))
    }
};

export default withRouter(connect(mstp, mdtp)(VideoItem));