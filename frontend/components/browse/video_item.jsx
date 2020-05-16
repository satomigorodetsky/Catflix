import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


class VideoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoveredVideo: false,
            showController: false,
            showSection: false,
        }
        this.handleList = this.handleList.bind(this);
        this.openController = this.openController.bind(this);
        this.closeController = this.closeController.bind(this);
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



    openController () {
        return (e) => {
            e.preventDefault();
        this.setState({
            showController: true
        })
       }
    }

    closeController() {
        return (e) => {
            e.preventDefault();

            this.setState({
                showController: false
            })
        }
    }


    render(){
        const { key, video, onlist, setDropDown } = this.props;

        const { showController } = this.state;


        const visibility = showController ? "now-you-see-me" : "now-you-dont"


        const listButton = onlist ?  <i className="fas fa-check"></i> : 
            <i className="fas fa-plus"></i> ;

        const pathname = this.props.location.pathname;


        if (pathname === "/browse")  {
            
            return (
                <>
                    <div className="item" key={key} onMouseEnter={this.openController()} onMouseLeave={this.closeController()} >
                        <div className={`video-controller ${visibility}`}>
                            <button className="play-index-button"><Link to={`/browse/${video.id}`}><i className="fas fa-play video-div"></i></Link></button>
                            <button className="list-index-button" onClick={this.handleList(video.id)}>{listButton}</button>
                            <div className="detail-index-button" onClick={() => setDropDown(video.id)}><i className="fas fa-angle-down"></i></div>
                             <p className="video-index-title">{video.title}</p>
                        </div>
                        <video className="video-rows" src={video.url} muted={true} onMouseEnter={event => event.currentTarget.play()} preload="true" poster={video.thumbnail}
                        onMouseOut={event => event.currentTarget.pause()} >
                     </video> 
                </div>

                </>
            )
        } else if (pathname == "/search" || pathname === "/browse/tvshows" || pathname === "/browse/movies" || pathname === "/browse/mylist" ) {

                return (

                    <div className={`item ${specialCombo}`} key={key} onMouseEnter={this.openController()} onMouseLeave={this.closeController()} >
                        <div className={`video-controller ${visibility}`}>
                            <button className="play-index-button"><Link to={`/browse/${video.id}`}><i className="fas fa-play video-div"></i></Link></button>
                            <button className="list-index-button" onClick={this.handleList(video.id)}>{listButton}</button>
                            <p className="video-index-title">{video.title}</p>
                        </div>
                        <video className="video-rows" src={video.url} muted={true} onMouseEnter={event => event.currentTarget.play()} preload="true" poster={video.thumbnail}
                            onMouseOut={event => event.currentTarget.pause()} >
                        </video>
                    </div>
                )
            }

    }
}

export default withRouter(VideoItem);

