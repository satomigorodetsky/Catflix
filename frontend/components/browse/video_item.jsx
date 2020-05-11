import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class VideoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoveredVideo: false,
        }
        this.handleList = this.handleList.bind(this);
    }

    handleList() {
        
        const { onlist, video, addToMyList, removeFromMyList } = this.props;
        return (e) => {
            
            e.preventDefault();
            if (onlist) {
                
                removeFromMyList(video.id);
                if (this.props.location.pathname.startsWith("/browse/mylist")) {
                    this.props.history.push(`/browse/mylist`);
                }
            } else {
                
                addToMyList(video.id)
            }
        }
    }


    render(){
        const { key, video, onlist } = this.props;

        const listButton = onlist ?  <i className="fas fa-check"></i> : 
            <i className="fas fa-plus"></i> ;
        const pathname = this.props.location.pathname;


        if (pathname === "/browse/tvshows" || pathname === "/browse/movies" || 
            pathname == "/search" || pathname === "/browse/mylist" || pathname === "/browse")  {
            
            return (
                    <div className="video-container" key={key}>
                        <video className="flex-row" src={video.url} onMouseEnter={event => event.currentTarget.play()} preload="true" poster={video.thumbnail}
                            onMouseOut={event => event.currentTarget.pause()} ></video>
                    <Link to={`/browse/${video.id}`}><i className="fas fa-play video-div"></i>&nbsp;Play</Link>
                    <div className="button-div" onClick={this.handleList()}>{listButton} &nbsp;My List</div>
                    </div>
            )
        }

    }
}

export default withRouter(VideoItem);