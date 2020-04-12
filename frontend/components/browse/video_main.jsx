import React from 'react';
import { Link } from 'react-router-dom';
class VideoMain extends React.Component {
   
    render () {
        const { videos } = this.props;
        const allVideos = videos.map((video, i) => {
                return (
                    <div className="videodetail-video">
                        <p className="video-detail p-title">{video.title}</p>
                        <p className="video-detail p-year">{video.year}</p>
                        <p className="video-detail p-description">{video.description}</p>
                        <Link to="browse/2">Play</Link>
                        <video className="video" muted autoPlay poster="">
                            <source src={video.url}
                            >
                            </source>
¥                        </video>
              
                    </div>
                )
            })
        return (
           <div className="main-video">
             {allVideos[0]}
           </div>
        )
    }
};

export default VideoMain;