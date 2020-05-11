import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import Footer from '../footer/footer';
import VideoItemContainer from './video_item_container';

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
        const pathname = location.pathname === "/browse/tvshows" ? "TV Shows" : "Movies";

        let allVideos;
        let allShows = ""; 
        let allMovies = "";

        if (location.pathname === "/browse/tvshows") {
            
            allShows = videos.map((video, key) => {
                if (video.video_type === "tv show") {
                    return <VideoItemContainer video={video} key={key} />
                }
            })
        }

        if (location.pathname === "/browse/movies") {
            allMovies = videos.map((video, key) => {
                if (video.video_type === "movie") {
                    return <VideoItemContainer video={video} key={key} />
                }
            })
        }

       allVideos = location.pathname === "/browse/tvshows" ? allShows : allMovies;
        
        return (
            <div className="video-type-container">
                <NavBarContainer />
                <div className="video-index-container">
                <div className="pathname">{pathname}</div>

                    <div className="video-index-video-type">
                        {allVideos}
                    </div>
                    <div className="vt-video-index"></div>


                </div>
                <Footer />
            </div>
        )
    }
};

export default VideoType;
