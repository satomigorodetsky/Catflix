import { connect } from 'react-redux';
import VideoDetail from './video_detail';
import { addToMyList, removeFromMyList } from '../../actions/list_video_actions';



const mstp = (state, ownProps) => {
    const users = state.entities.users
    const currentUserId = state.session.currentUser
    const videoId = ownProps.id
    const onlist = users[currentUserId].listVideoIds.includes(videoId) ? true : false;

    return {
        video: state.entities.videos[videoId],
        onlist
    }

};

const mdtp = (dispatch) => {
    return {
        addToMyList: (videoId) => dispatch(addToMyList(videoId)),
        removeFromMyList: (videoId) => dispatch(removeFromMyList(videoId))
    }
};

export default (connect(mstp, mdtp)(VideoDetail));