import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import Footer from '../footer/footer';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount () {
        if (this.props.match.params.videoId) {
       this.props.fetchVideo(parseInt(this.props.match.params.videoId))};
    }

    render () {
        if (this.props.video === undefined) return null;

        return (
            <div className="show-page-container">
                <NavBarContainer />
                <div className="show-page-video-container">
                    <video className="show-page-video" src={this.props.video.url} autoPlay controls />
                </div>
                <Footer />
            </div>
        );
    } 
};

export default VideoShow;