import React from 'react';
import { Link } from 'react-router-dom';

class VideoDetail extends React.Component {
    constructor (props) {
       super(props);
       this.state = {
           showSection: true,
       };
    //   this.toggleMute = this.toggleMute.bind(this);
    }

    render () {
        debugger
        const { video, setDropDown } = this.props;
        if (video) {
            debugger
            return (
                <div className="info-container">
                    <div onClick={() => setDropDown(null)}><i className="fas fa-times close-detail"></i></div>
                    <div className="video-detail">
                        <p>{video.title}</p>
                        <p>{video.year}</p>
                        <p>{video.description}</p>
                    </div>
                    <div className="video-img">
                        <img src={video.thumbnail} alt={video.title} />
                    </div>
                </div>
            )
         } else {
             debugger
             return "";
         }
        }
};

export default VideoDetail;