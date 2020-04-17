import { RECEIVE_VIDEOS, RECEIVE_VIDEO, RECEIVE_SEARCH_ERRORS, CLEAR_VIDEOS, RECEIVE_LIST_ERRORS } from "../actions/video_actions";
import { merge } from 'lodash';

const VideosReducer = (state = {}, action) => {
    Object.freeze(state);
    if (typeof action.type === "undefined") {
      throw new Error("you dont have any action")
    }
    switch (action.type) {
        case RECEIVE_VIDEOS:
            return action.videos;
        case CLEAR_VIDEOS:
            return {};
        case RECEIVE_LIST_ERRORS:
            return {};
        case RECEIVE_VIDEO:
            return merge({}, state, { [action.video.id]: action.video });
        case RECEIVE_SEARCH_ERRORS:
            return {};
        default:
            return state;
    }
}

export default VideosReducer;