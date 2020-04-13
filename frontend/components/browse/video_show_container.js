import { connect } from 'react-redux';
import { fetchVideo } from '../../actions/video_actions';
import VideoShow from './video_show';

const mstp = (state, ownProps) => {
    
    return {
        video: state.entities.videos[ownProps.match.params.videoId]
    }
  
};

const mdtp = (dispatch) => {
    return {
        fetchVideo: (id) => dispatch(fetchVideo(id))
    }
};

export default (connect(mstp, mdtp)(VideoShow));