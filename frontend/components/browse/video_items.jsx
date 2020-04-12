import React from 'react';

class VideoItems extends React.Component {

    render() {
        const {videos} = this.props;
        const allVideos = videos.map((video, i) => {
            return (
                <div className="video-container">
                    <div className="video-plater">
                       <video src={video.url}></video>
                    </div>
                </div>
            )
        })
        return (
            <div>
               {allVideos.slice(1)}
            </div>
        ) 
    }
};

export default VideoItems;

