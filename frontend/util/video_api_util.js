export const fetchVideos = () => {
    return $.ajax({
        method: 'get',
        url: "/api/videos"
    })
};

export const fetchVideo = (id) => {
    return $.ajax({
        method: 'get',
        url: `/api/videos/${id}`
    })
};

export const searchVideos = (query) => {
    return $.ajax({
        method: 'get',
        url: '/api/videos/search',
        data: { query_params: query }
    })
};

export const fetchListVideos = () => {
    return $.ajax({
        method: 'get',
        url: '/api/videos/mylist'
    })
}