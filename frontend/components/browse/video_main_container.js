import { connect } from 'react-redux';
import { fetchVideos, clearVideos } from '../../actions/video_actions';
import VideoMain from './video_main';
import { addToMyList, removeFromMyList } from '../../actions/list_video_actions';


const mstp = (state) => {
    const users = state.entities.users
    const currentUserId = state.session.currentUser
    const videoId = parseInt(Object.keys(state.entities.videos)[0])
    const onlist = users[currentUserId].listVideoIds.includes(videoId) ? true : false;

    return {
        videos: Object.values(state.entities.videos),
        videoId,
        onlist
    }
};

const mdtp = (dispatch) => {
    return {
        fetchVideos: () => dispatch(fetchVideos()),
        clearVideos: () => dispatch(clearVideos()), 
        addToMyList: (videoId) => dispatch(addToMyList(videoId)),
        removeFromMyList: (videoId) => dispatch(removeFromMyList(videoId))

    }
};

export default connect(mstp, mdtp)(VideoMain);