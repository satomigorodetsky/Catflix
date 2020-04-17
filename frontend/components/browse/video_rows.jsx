import React from 'react';
import {Link} from 'react-router-dom';

class VideoRows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoveredVideo: false,
            addedToList: false
        }
        this.handleList = this.handleList.bind(this);
    }

    handleList (id){
        return (e) => {
            e.preventDefault();
            this.setState({ addedToList: (!this.state.addedToList) })
            if (!this.state.addedToList) {
                        this.props.addToMyList(id)
            } else {
                        this.props.removeFromMyList(id)
            };}
    }

    render () {
        const { videos } = this.props;
        const { addedToList } = this.state;
        const button = addedToList ? "Remove" : "Add";
        const allTVshows = videos.map((video, i) => {
        if ( video.video_type === "tv show") {

        return (
            <div className="video-container" key={i}>
                <video id="video" className="flex-row" src={video.url} onMouseEnter={event => event.currentTarget.play()} preload="true" poster={video.thumbnail}
                    onMouseOut={event => event.currentTarget.pause()} ></video>
                {/* <img src={video.thumbnail} alt={video.title} className="flex-row"/> */}
                <div className="bl"><Link to={`/browse/${video.id}`}>Play</Link></div>
                {/* <button onClick={this.handleList(video.id)} >{button}</button>  */}

                {/* <video controls src={video.url} placeholder={video.thumbnail}></video> */}
            </div>
        )
    }})

        const allMovies = videos.map((video, i) => {
            if (video.video_type === "movie") {
                return (
                    <div className="video-container" key={i}>
                        <video className="flex-row" src={video.url} onMouseEnter={event => event.currentTarget.play()} preload="true" poster={video.thumbnail}
                            onMouseOut={event => event.currentTarget.pause()} ></video>
                        {/* <img src={video.thumbnail} alt={video.title} className="flex-row"/> */}
                        <div className="bl"><Link to={`/browse/${video.id}`}>Play</Link></div>
                        {/* <button onClick={this.handleList(video.id)} >{button}</button>  */}

                        {/* <video controls src={video.url} placeholder={video.thumbnail}></video> */}
                    </div>
                )
            }
        })
        const allCartoons = videos.map((video, i) => {
            if (video.genre === "Cartoon") {
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
        const allComedy = videos.map((video, i) => {
            if (video.genre === "Comedy") {
                return (
                    <div className="video-container" key={i}>
                        <video  className="flex-row" src={video.url} onMouseEnter={event => event.currentTarget.play() } preload="true" poster={video.thumbnail}
                            onMouseOut={event => event.currentTarget.pause()} ></video>
                        {/* <img src={video.thumbnail} alt={video.title} className="flex-row"/> */}
                        <div className="bl"><Link to={`/browse/${video.id}`}>Play</Link></div>
                        {/* <video controls src={video.url} placeholder={video.thumbnail}></video> */}
                    </div>
                )
            }
        })

        const allDoc= videos.map((video, i) => {
            if (video.genre === "Documentary") {
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

        const allAction = videos.map((video, i) => {
            if (video.genre === "Action") {
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

        const allHorror = videos.map((video, i) => {
            if (video.genre === "Horror") {
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

        const allMus = videos.map((video, i) => {
            if (video.genre === "Musical") {
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
    return (
        <div className="video-index-container">
            <div className="category">TV Shows</div>

            <div className="video-index">
            {allTVshows}
            </div>
            <div className="category">Movies</div>

            <div className="video-index">
            {allMovies}
            </div>

            <div className="category">Cartoon</div>
            <div className="video-index">
            {allCartoons}
            </div>

            <div className="category">Comedy</div>
            <div className="video-index">
            {allComedy}
            </div>

            <div className="category">Documentary</div>
            <div className="video-index">
                {allDoc}
            </div>
            <div className="category">Action</div>
            <div className="video-index">
                {allAction}
            </div>
            <div className="category">Horror</div>
            <div className="video-index">
                {allHorror}
            </div>

            <div className="category">Muscial</div>
            <div className="video-index">
                {allMus}
            </div>
        </div>
    )
    } 
};

export default VideoRows;