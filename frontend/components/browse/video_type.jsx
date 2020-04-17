import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
import Footer from '../footer/footer';

class VideoType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoveredVideo: false
        }
    }

    componentDidMount() {
            this.props.fetchVideos()
    };

    render() {
        const { videos, location } = this.props;
        const pathname = location.pathname === "/browse/tvshows" ? "TV Shows" : "Movies"
        let allvideos;
        if (pathname === "TV Shows") {
            allvideos = videos.map((video, i) => {
            if (video.video_type === "tv show") {
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
        }) } else {
            allvideos = videos.map((video, i) => {
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
        })}

        
        return (
            <div className="video-type-container">
                <NavBarContainer />
                <div className="video-index-container">
                <div className="pathname">{pathname}</div>

                    <div className="video-index-video-type">
                        {/* <div className="vt-video-index"> */}
                        {allvideos}
                        {/* </div> */}
                    </div>
                    <div className="vt-video-index"></div>


                </div>
                <Footer />
            </div>
        )
    }
};

export default VideoType;
