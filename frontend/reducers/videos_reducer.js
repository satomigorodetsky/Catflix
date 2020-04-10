import { RECEIVE_VIDEOS, RECEIVE_VIDEO } from "../actions/video_actions";


const VideosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VIDEOS:
            return action.videos;
        case RECEIVE_VIDEO:
            return Object.assign({},state,{ [action.video.id]: action.videos.video });
        default: 
            return state; 
    }
}

export default VideosReducer;