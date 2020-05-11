import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import Footer from '../footer/footer'
import VideoMainContainer from'./video_main_container';
import VideoRowsContainer from './video_rows_container';

class VideoIndex extends React.Component {
    
    componentDidMount() {
        this.props.fetchVideos();
    }

    componentWillUnmount() {
        this.props.clearVideos();
    }
    render() {
        return (
            <div className="video-index-container">
               <NavBarContainer />
               <VideoMainContainer />
               <VideoRowsContainer />
               <Footer />
            </div>
              

        )
    }
};

export default VideoIndex;