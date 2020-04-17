import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MyListIndex from './my_list_index';
import { fetchListVideos, clearVideos, fetchVideos } from '../../actions/video_actions';
import { addToMyList, removeFromMyList } from '../../actions/list_video_actions';

const mstp = (state) => {
   return {
     users: state.entities.users,
     currentUserId: state.session.currentUser.id,
     videos: Object.values(state.entities.videos),
     errors: state.errors.list
   }
};

const mdtp = (dispatch) => {
    return {
       fetchVideos: () => dispatch(fetchVideos()),
       fetchListVideos: () => dispatch(fetchListVideos()),
       clearVideos: () => dispatch(clearVideos()),
       addToMyList: (videoId) => dispatch(addToMyList(videoId)),
       removeFromMyList: (videoId) => dispatch(removeFromMyList(videoId))
    }
};

export default withRouter(connect(mstp,mdtp)(MyListIndex));