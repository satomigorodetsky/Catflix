import { connect } from 'react-router-dom';
import GenreIndex from './genre_index';
import { receiveVideo } from '../../actions/video_actions';

const mstp = (state) => {
    return {
    videos: state.entities.videos,
    genres: state.entities.genres
    }
};

const mdtp = dispatch => {
    return {
        receiveVideos: () => dispatch(receiveVideo())
    }
};

export default connect(mstp,mdtp)(GenreIndex);