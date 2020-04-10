import * as ApiVideoUtil from '../util/video_api_util';

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";

const receiveVideos = (videos) => {
    return {
        type: RECEIVE_VIDEOS,
        videos
    }
};

const receiveVideo = (video) => {
    return {
        type: RECEIVE_VIDEO,
        video
    }
};

export const fetchVideos = () => (dispatch) => {
    return ApiVideoUtil.fetchVideos() 
    .then((videos) => dispatch(receiveVideos(videos)))
};

export const fetchVideo = (videoId) => (dispatch) => {
    return ApiVideoUtil.fetchVideo(videoId)
        .then((video) => dispatch(receiveVideo(video)))
};