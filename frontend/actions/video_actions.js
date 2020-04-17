import * as ApiVideoUtil from '../util/video_api_util';

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_SEARCH_ERRORS = "RECEIVE_SEARCH_ERRORS";
export const RECEIVE_LIST_ERRORS = "RECEIVE_LIST_ERRORS"
export const CLEAR_VIDEOS = "CLEAR_VIDEOS";

export const receiveVideos = (videos) => {
    return {
        type: RECEIVE_VIDEOS,
        videos
    }
};

export const receiveVideo = (video) => {
    return {
        type: RECEIVE_VIDEO,
        video
    }
};

export const receiveSearchErrors = (errors) => {
    return {
        type: RECEIVE_SEARCH_ERRORS,
        errors
    }
};

export const receiveListErrors = (errors) => {
    return {
        type: RECEIVE_LIST_ERRORS,
        errors
    }
}

export const clearVideos = () => ({
    type: CLEAR_VIDEOS
});

export const fetchVideos = () => (dispatch) => {
    return ApiVideoUtil.fetchVideos() 
    .then((videos) => dispatch(receiveVideos(videos)))
};

export const fetchVideo = (id) => (dispatch) => {
    return ApiVideoUtil.fetchVideo(id)
    .then((video) => dispatch(receiveVideo(video)))
};

export const searchVideos = (query) => (dispatch) => {
    return ApiVideoUtil.searchVideos(query)
    .then((videos) => { 
        return dispatch(receiveVideos(videos))}, 
    err => { 
        return dispatch(receiveSearchErrors(err.responseJSON))
    })
} 

export const fetchListVideos = () => (dispatch) => {
    return ApiVideoUtil.fetchListVideos()
    .then(videos =>  { 
            return dispatch(receiveVideos(videos))} ,
    (err) => { 
            return dispatch(receiveListErrors(err.responseJSON)) }
    )
};