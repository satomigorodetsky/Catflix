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
        
        const { video, setDropDown, onlist } = this.props;

        const listButton = onlist ? <i className="fas fa-check"></i> :
            <i className="fas fa-plus"></i>;


        if (video) {
            
            return (
                <div className="info-container">
                    <div onClick={() => setDropDown(null)}><i className="fas fa-times close-detail"></i></div>
                    <div className="video-detail">
                        <div className="inner">
                            <div className="inner1" >
                                <p className="video-detail-title" >{video.title}</p>
                                <p className="video-detail-year">{video.year}</p>
                                <p className="video-detail-des">{video.description}</p>
                            </div>
                            <div className="video-detail-innder2">
                                <button className="detail-play-button"><Link to={`/browse/${video.id}`}><i className="fas fa-play video-div"></i>&nbsp;&nbsp;Play</Link></button>
                                <button className="detail-list-button" onClick={this.handleList(video.id)}><div>{listButton} &nbsp;My List</div></button>
                            </div>     
                        </div>
                    </div>
                    <div className="video-img">
                        <img className="video-img" src={video.thumbnail} alt={video.title} />
                    </div>
                </div>
            )
         } else {
             
             return "";
         }
        }
};

export default VideoDetail;