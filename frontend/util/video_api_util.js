export const fetchVideos = () => {
    return $.ajax({
        url: "/api/videos"
    })
};

export const fetchVideo = (id) => {
    return $.ajax({
        url: `/api/videos/${id}`
    })
};

