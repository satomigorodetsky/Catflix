import { RECEIVE_VIDEOS, RECEIVE_VIDEO } from "../actions/video_actions";
import { merge } from 'lodash';

const VideosReducer = (state = {}, action) => {
    Object.freeze(state);
    if (typeof action.type === "undefined") {
      throw new Error("you dont have any action")
    }
    switch (action.type) {
        case RECEIVE_VIDEOS:
            return action.videos;
        case RECEIVE_VIDEO:
            return merge({}, state, { [action.video.id]: action.video });
        default:
            return state;
    }
}

export default VideosReducer;