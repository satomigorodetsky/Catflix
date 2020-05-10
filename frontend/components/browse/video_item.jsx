import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


class VideoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoveredVideo: false,
            addedToList: false
        }
        this.handleList = this.handleList.bind(this);
    }

    handleList(id) {
        return (e) => {
            e.preventDefault();
            this.setState({ addedToList: (!this.state.addedToList) })
            if (!this.state.addedToList) {
                this.props.addToMyList(id)
            } else {
                this.props.removeFromMyList(id)
            };
        }
    }

    render(){
       const { addedToList } = this.state;
        const { videos, video_type, genre } = this.props;
        const button = addedToList ? "Remove" : "Add";
        const pathname = this.props.location.pathname;

        if (pathname === "/browse") {
            return (
                videos.map((video, i) => {
                    if (video.video_type === video_type) {
                        return (
                            <div className="video-container" key={i}>
                                <video id="video" className="flex-row" src={video.url} onMouseEnter={event => event.currentTarget.play()} preload="true" poster={video.thumbnail}
                                    onMouseOut={event => event.currentTarget.pause()} ></video>
                                {/* <img src={video.thumbnail} alt={video.title} className="flex-row"/> */}
                                <div className="bl"><Link to={`/browse/${video.id}`}>Play</Link></div>
                                <button onClick={this.handleList(video.id)} >{button}</button>

                                {/* <video controls src={video.url} placeholder={video.thumbnail}></video> */}
                            </div>
                        )
                    } else if (video.genre === genre) {
                        return (
                            <div className="video-container" key={i}>
                                <video id="video" className="flex-row" src={video.url} onMouseEnter={event => event.currentTarget.play()} preload="true" poster={video.thumbnail}
                                    onMouseOut={event => event.currentTarget.pause()} ></video>
                                {/* <img src={video.thumbnail} alt={video.title} className="flex-row"/> */}
                                <div className="bl"><Link to={`/browse/${video.id}`}>Play</Link></div>
                                <button onClick={this.handleList(video.id)} >{button}</button>

                                {/* <video controls src={video.url} placeholder={video.thumbnail}></video> */}
                            </div>
                        )
                    } 
                })
            )
        }


        if (pathname === "/browse/tvshows")  {
         return (
             videos.map((video, i) => {
                 if (video.video_type === "tv show") {
                     return (
                         <div className="video-container" key={i}>
                             <video className="flex-row" src={video.url} onMouseEnter={event => event.currentTarget.play()} preload="true" poster={video.thumbnail}
                                 onMouseOut={event => event.currentTarget.pause()} ></video>
                             {/* <img src={video.thumbnail} alt={video.title} className="flex-row"/> */}
                             <div className="bl"><Link to={`/browse/${video.id}`}>Play</Link></div>
                             {/* <video controls src={video.url} placeholder={video.thumbnail}></video> */}
                         </div>
                     )
                 }
             })
         )  
        }

        if (pathname === "/browse/movies") {
            return (
                videos.map((video, i) => {
                    if (video.video_type === "movie") {
                        return (
                            <div className="video-container" key={i}>
                                <video className="flex-row" src={video.url} onMouseEnter={event => event.currentTarget.play()} preload="true" poster={video.thumbnail}
                                    onMouseOut={event => event.currentTarget.pause()} ></video>
                                {/* <img src={video.thumbnail} alt={video.title} className="flex-row"/> */}
                                <div className="bl"><Link to={`/browse/${video.id}`}>Play</Link></div>
                                {/* <video controls src={video.url} placeholder={video.thumbnail}></video> */}
                            </div>
                        )
                    }
                })
            )
        }

        if (pathname == "/search") {
            return (
                videos.map((video, i) => {    
                        return (
                            <div className="video-container" key={i}>
                                <video className="flex-row" src={video.url} onMouseEnter={event => event.currentTarget.play()} preload="true" poster={video.thumbnail}
                                    onMouseOut={event => event.currentTarget.pause()} ></video>
                                {/* <img src={video.thumbnail} alt={video.title} className="flex-row"/> */}
                                <div className="bl"><Link to={`/browse/${video.id}`}>Play</Link></div>
                                {/* <video controls src={video.url} placeholder={video.thumbnail}></video> */}
                            </div>
                        )
                    }
                )
            )
        }

        if (pathname === "/browse/mylist") {
            return (
                videos.map((video, i) => {
                    return (
                        <div className="video-container" key={i}>
                            <video className="flex-row" src={video.url} onMouseEnter={event => event.currentTarget.play()} preload="true" poster={video.thumbnail}
                                onMouseOut={event => event.currentTarget.pause()} ></video>
                            {/* <img src={video.thumbnail} alt={video.title} className="flex-row"/> */}
                            <div className="bl"><Link to={`/browse/${video.id}`}>Play</Link></div>
                            {/* <video controls src={video.url} placeholder={video.thumbnail}></video> */}
                        </div>
                    )
                }
                )
            )
        }


    }
}

export default withRouter(VideoItem);