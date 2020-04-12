import React from 'react';
import VideoItems from './video_items';

class VideoRows extends React.Component {
    render () {
        const { videos } = this.props;
        return (
            <div className="video-rows-container flex">
                 <h1 className="video-rows-title">Rows title</h1>
                <section className="video-rows-index flex"></section>
                <VideoItems videos={videos}/>
            </div>
        )
    } 
};


export default VideoRows;