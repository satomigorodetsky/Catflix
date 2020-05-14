import { connect } from 'react-redux';
import VideoDetail from './video_detail';
import { addToMyList, removeFromMyList } from '../../actions/list_video_actions';


const mstp = (state, ownProps) => {
    const videoId = ownProps.id
        return {
        video: state.entities.videos[videoId]
    }

};

const mdtp = (dispatch) => {
    return {
        addToMyList: (videoId) => dispatch(addToMyList(videoId)),
        removeFromMyList: (videoId) => dispatch(removeFromMyList(videoId))
    }
};

export default (connect(mstp, mdtp)(VideoDetail));