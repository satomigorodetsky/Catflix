import React from 'react';
import { Link } from 'react-router-dom';

class VideoDetail extends React.Component {
    constructor (props) {
       super(props);
       this.state = {
           showSection: true,
       };
        this.handleList = this.handleList.bind(this);
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

    render () {
        debugger
        const { video, setDropDown, onlist } = this.props;

        const listButton = onlist ? <i className="fas fa-check"></i> :
            <i className="fas fa-plus"></i>;


        if (video) {
            debugger
            return (
                <div className="info-container">
                    <div onClick={() => setDropDown(null)}><i className="fas fa-times close-detail"></i></div>
                    <div className="video-detail">
                        <p>{video.title}</p>
                        <p>{video.year}</p>
                        <p>{video.description}</p>
                        <button className="main-list-button" onClick={this.handleList(video.id)}><div>{listButton} &nbsp;My List</div></button>
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