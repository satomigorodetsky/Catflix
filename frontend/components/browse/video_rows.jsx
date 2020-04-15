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
                <video className="flex-row" src={video.url} onMouseEnter={event => event.currentTarget.play()} preload="true" poster={video.thumbnail}
                    onMouseOut={event => event.currentTarget.pause()} ></video>
                {/* <img src={video.thumbnail} alt={video.title} className="flex-row"/> */}
                <div className="bl"><Link to={`/browse/${video.id}`}>Play</Link></div>
                {/* <video controls src={video.url} placeholder={video.thumbnail}></video> */}
            </div>
        )
    }})

        const allMovies = videos.map((video, i) => {
            if (video.video_type === "movie") {
                return (
                    <div className="video-container" key={i}>
                        <video className="flex-row" src={video.url} onMouseEnter={event => event.currentTarget.play()} preload="true" poster={video.thumbnail}
                            onMouseOut={event => event.currentTarget.pause()} ></video>
                        {/* <img src={video.thumbnail} alt={video.title} className="flex-row"/> */}
                        <div className="bl"><Link to={`/browse/${video.id}`}>Play</Link></div>
                        {/* <video controls src={video.url} placeholder={video.thumbnail}></video> */}
                    </div>
                )
            }
        })
        const allCartoons = videos.map((video, i) => {
            if (video.genre === "Cartoon") {
                return (
                    <div className="video-container" key={i}>
                        <video muted className="flex-row" src={video.url} onMouseEnter={event => event.currentTarget.play()} preload="true" poster={video.thumbnail}
                            onMouseOut={event => event.currentTarget.pause()} ></video>
                        {/* <img src={video.thumbnail} alt={video.title} className="flex-row"/> */}
                        <div className="bl"><Link to={`/browse/${video.id}`}>Play</Link></div>
                        {/* <video controls src={video.url} placeholder={video.thumbnail}></video> */}
                    </div>
                )
            }
        })
        const allComedy = videos.map((video, i) => {
            if (video.genre === "Comedy") {
                return (
                    <div className="video-container" key={i}>
                        <video muted className="flex-row" src={video.url} onMouseEnter={event => event.currentTarget.play()} preload="true" poster={video.thumbnail}
                            onMouseOut={event => event.currentTarget.pause()} ></video>
                        {/* <img src={video.thumbnail} alt={video.title} className="flex-row"/> */}
                        <div className="bl"><Link to={`/browse/${video.id}`}>Play</Link></div>
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

            <div className="category">Cartoon</div>
            <div className="video-index">
            {allCartoons}
            </div>

            <div className="category">Comedy</div>
            <div className="video-index">
            {allComedy}
            </div>
        </div>
    )
    } 
};

export default VideoRows;