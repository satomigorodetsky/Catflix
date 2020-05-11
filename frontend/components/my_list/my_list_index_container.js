import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MyListIndex from './my_list_index';
import { fetchListVideos, clearVideos } from '../../actions/video_actions';

const mstp = (state, ownProps) => {
   const users = state.entities.users
   const currentUserId = state.session.currentUser
   return {
      users,
      currentUserId,
      videos: Object.values(state.entities.videos),
      errors: state.errors.list,
   }
};

const mdtp = (dispatch) => {
    return {
       fetchListVideos: () => dispatch(fetchListVideos()),
       clearVideos: () => dispatch(clearVideos()),
    }
};

export default withRouter(connect(mstp,mdtp)(MyListIndex));