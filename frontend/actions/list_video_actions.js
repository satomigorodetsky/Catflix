import * as ListVideoApiUtil from '../util/list_video_api_util';

export const RECEIVE_LIST_VIDEOS = "RECEIVE_LIST_VIDEOS";

const receiveListVideos = (videos) => {
    return {
        type: RECEIVE_LIST_VIDEOS,
        videos
    }
};

export const addToMyList = (videoId) => (dispatch) => {
    return ListVideoApiUtil.addToMyList(videoId)
    .then((videos) => dispatch(receiveListVideos(videos)))
};

export const removeFromMyList = (videoId) => (dispatch) => {
    return ListVideoApiUtil.removeFromMyList(videoId)
    .then((videos) => dispatch(receiveListVideos(videos)))
};

