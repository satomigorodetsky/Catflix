import React from 'react';
import { Link } from 'react-router-dom';

class VideoDetail extends React.Component {
    constructor (props) {
       super(props);
       this.state = {
           muted: true
       };
      this.toggleMute = this.toggleMute.bind(this);
    }

    render () {
        const { video } = this.props;
        return (
            <div>
                <div className="video-detail">
                    <p>{video.title}</p>
                    <p>{video.year}</p>
                    <p>{video.description}</p>
                    <aside>
                        <Link to="/browse/1">
                       <button> Play </button>
                        </Link>
                    </aside>
                </div>
             
            </div>
      )
    }
};

export default VideoDetail;