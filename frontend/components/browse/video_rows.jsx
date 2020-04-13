import React from 'react';
import {Link} from 'react-router-dom';

class VideoRows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoveredVideo: false
        }
    }

    render () {
        const { videos } = this.props;
    const allTVshows = videos.map((video, i) => {
        if ( video.video_type === "tv_show") {
        return (
            <div className="video-container" key={i}>
                <img src={video.thumbnail} alt={video.title} className="flex-row" />
                <div className="bl"><Link to={`/browse/${video.id}`}>Play</Link></div>
                {/* <video className="video-row" controls src={video.url} placeholder={video.thumbnail} preload></video> */}
            </div>
        )
    }})

        const allMovies = videos.map((video, i) => {
            if (video.video_type === "movie") {
                return (
                    <div className="video-container" key={i}>
                        <img src={video.thumbnail} alt={video.title} className="flex-row"/>
                        <Link to={`/browse/${video.id}`} className="bl">Play</Link>
                        {/* <video controls src={video.url} placeholder={video.thumbnail}></video> */}
                    </div>
                )
            }
        })
    return (
        <div className="video-index-container">
            <div className="category">TV Shows</div>

            <div className="video-index">
            {allTVshows}
            </div>
            <div className="category">Movies</div>

            <div className="video-index">
            {allMovies}
            </div>
        </div>
    )
    } 
};

export default VideoRows;