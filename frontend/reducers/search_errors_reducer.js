import { RECEIVE_SEARCH_ERRORS, RECEIVE_VIDEOS } from '../actions/video_actions';

const searchErrorsReducer = (state ={}, action ) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_SEARCH_ERRORS:
            return action.errors;
        case RECEIVE_VIDEOS:
            return {};
        default:
            return state;
    }
};

export default searchErrorsReducer;