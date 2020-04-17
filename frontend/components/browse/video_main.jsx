import React from 'react';
import { Link } from 'react-router-dom';

class VideoMain extends React.Component {

    componentDidMount() {
        this.props.fetchVideos();
    }

    componentWillUnmount () {
        this.props.clearVideos();
    }

   
    render () {
        const {videos} = this.props
        const allVideos = videos.map((video,i) => {
            return (
                <span>
                <div className="detail-container">
                <p className="bl main-video-title">{video.title}</p>
                <p className="bl main-video-description">{video.description}</p>
                    <Link to={`/browse/${video.id}`} className="bl">Play</Link>
                </div>
                <video className="main-video" muted autoPlay loop key={video.url}>
                    <source src={video.url} type="video/mp4"></source>
                        Your browser does not support the video tag.
                    </video>
                </span>
            )
            
        })

        const video = allVideos[0]
        return (
            <div className="main-video-container">
            {video}
            </div>
        )}

};

export default VideoMain;