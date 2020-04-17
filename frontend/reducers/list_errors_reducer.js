import { RECEIVE_LIST_ERRORS, RECEIVE_VIDEOS } from '../actions/video_actions';

const listErrorsReducer = (state=[], action ) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LIST_ERRORS:
            return action.errors;
        case RECEIVE_VIDEOS:
            return [];
        default:
            return state;
    }
};

export default listErrorsReducer;