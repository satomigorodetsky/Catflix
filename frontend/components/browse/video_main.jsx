import React from 'react';
import { Link } from 'react-router-dom';

class VideoMain extends React.Component {

   
    render () {
        const {videos} = this.props
        const allVideos = videos.map((video,i) => {
            return video.id
        })
        const videoId = allVideos[0]
        return (
            <div className="main-video-container">
                <div className="detail-container">
                <p className="bl main-video-title">Cats</p>
                <p className="bl main-video-year">2019</p>
                <p className="bl main-video-description">A tribe of cats called the Jellicles must decide yearly which one will ascend to the Heaviside Layer and come back to a new Jellicle life.</p>
                <Link to={`/browse/${videoId}`} className="bl">Play</Link>
                </div>
                <video className="main-video" muted autoPlay loop>
                    <source src="https://catflix-dev.s3.amazonaws.com/cats2019.mp4" type="video/mp4"></source>
                        Your browser does not support the video tag.
                    </video>
            </div>
        )}
};

export default VideoMain;