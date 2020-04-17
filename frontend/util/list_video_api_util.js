export const addToMyList = (videoId) => {
    return $.ajax({
       method: 'post',
       url: '/api/list_videos',
       data: { video_id: videoId }
    })
};

export const removeFromMyList = (videoId) => {
    return $.ajax({
        method: 'delete',
        url: `/api/list_videos/${videoId}`
    })
};

