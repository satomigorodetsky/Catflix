import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import Footer from '../footer/footer';
import VideoItemContainer from './video_item_container';
import VideoDetailContainer from './video_detail_container';

class VideoType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoveredVideo: false,
            tid: null,
            mid: null,
        }
        this.setDropDown = this.setDropDown.bind(this)
    }


    setDropDown(id) {
        
        let that = this;
        return (videoId) => {
            
            that.setState({
                tid: null,
                mid: null
            })
            
            that.setState({
                [id]: videoId
            })
            
        };
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
                    return <VideoItemContainer setDropDown={this.setDropDown('tid')} video={video} key={key} />
                }
            })
        }

        if (location.pathname === "/browse/movies") {
            allMovies = videos.map((video, key) => {
                if (video.video_type === "movie") {
                    return <VideoItemContainer setDropDown={this.setDropDown('mid')} video={video} key={key} />
                }
            })
        }

       allVideos = location.pathname === "/browse/tvshows" ? allShows : allMovies;

        let either;
        either = "/browse/tvshows" ? "tid" : "mid"
        
        return (
            <div className="video-type-container">
                <NavBarContainer />
                <div className="video-index-container">
                <div className="pathname">{pathname}</div>

                    <div className="container">
                        {allVideos}
                    </div>
                    <VideoDetailContainer setDropDown={this.setDropDown({})} /> 
                    <div className="vt-video-index"></div>


                </div>
                <Footer />
            </div>
        )
    }
};

export default VideoType;
