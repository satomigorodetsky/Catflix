import React from 'react';
import { Link } from 'react-router-dom';

class VideoMain extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            muted: true
        }
        this.handleList = this.handleList.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
    }

    componentDidMount() {
        this.props.fetchVideos();
    }

    componentWillUnmount () {
        this.props.clearVideos();
    }

    handleList(id) {
         
        const { onlist, addToMyList, removeFromMyList } = this.props;
        return (e) => {

            e.preventDefault();
            if (onlist) {
                removeFromMyList(id);
            } else {
                addToMyList(id)
            }
        }
    }

    toggleMute(e) {
        
        e.preventDefault();

        let videoEl = document.getElementsByClassName("main-video")[0];

        

        this.setState({
            muted: !this.state.muted
        });

        
        videoEl.muted = !videoEl.muted;
    }
   
    render () {
        const { videos, onlist} = this.props;
        const { muted } = this.state;

        const audio = muted ? 
            (<button className="mute-button" onClick={this.toggleMute}>
                <i className="fas fa-volume-mute"></i>
            </button>
            ) : (
                <button className="mute-button" onClick={this.toggleMute}>
                <i className="fas fa-volume-up"></i>
            </button> )

        const listButton = onlist ? <i className="fas fa-check"></i> :
            <i className="fas fa-plus"></i>;


        const allVideos = videos.map((video,i) => {
            return (
                <span>
                <div className="detail-container">
                <p className="bl main-video-title">{video.title}</p>
                <p className="bl main-video-description">{video.description}</p>
                     <div className="play-list-buttons">
                        <button className="main-play-button"><Link to={`/browse/${video.id}`}><i className="fas fa-play video-div"></i>&nbsp;&nbsp;Play</Link></button>
                            <button className="main-list-button" onClick={this.handleList(video.id)}><div>{listButton} &nbsp;My List</div></button>
                    </div>
                </div>
                <video className="main-video" muted={true} autoPlay={true} loop key={video.url}>
                    <source src={video.url} type="video/mp4"></source>
                        Your browser does not support the video tag.
                    </video>
                </span>
            )
            
        })

        const video = allVideos[0]

        return (
            <div className="main-video-container">
            {audio}
            {video}
            </div>
        )}

};

export default VideoMain;