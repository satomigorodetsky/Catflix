import { connect } from 'react-redux';
import SearchIndex from './search_index';
import { withRouter } from 'react-router-dom';
import { searchVideos, receiveVideos, clearVideos } from '../../actions/video_actions';

const mstp = (state) => {
    return {
        videos: Object.values(state.entities.videos),
        errors: state.errors.search
    }
};

const mdtp = (dispatch) => {
    return {
        searchVideos: (query) => dispatch(searchVideos(query)),
        receiveVideos: () => dispatch(receiveVideos()),
        clearVideos: () => dispatch(clearVideos())
    }
};

export default withRouter(connect(mstp,mdtp)(SearchIndex))