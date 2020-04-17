import React from 'react';
import NavBarContainer  from '../navbar/navbar_container';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';

export default class MyListIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoveredVideo: false,
        }
        this.handleList = this.handleList.bind(this);
    }

    handleList(id) {
        return (e) => {
            e.preventDefault();
            this.props.removeFromMyList(id)
        }
    }


    componentDidMount() {
      this.props.fetchVideos()
      .then(
          () => this.props.fetchListVideos()
          );
    }

    componentWillUnMount() {
        this.props.fetchVideos()
            .then(
                () => this.props.fetchListVideos()
            );
    }

    // componentWillUnmount () {
    //     this.props.removeFromMyList(id)
    // }

    render () {
        const { videos } = this.props;
        const { addedToList } = this.state;
        const myListVideos = videos.map((video, i) => {
            return (
                <div className="video-container" key={i}>
                    <video id="video" className="flex-row" src={video.url} onMouseEnter={event => event.currentTarget.play()} preload="true" poster={video.thumbnail}
                        onMouseOut={event => event.currentTarget.pause()} ></video>
                    {/* <img src={video.thumbnail} alt={video.title} className="flex-row"/> */}
                    <div className="bl"><Link to={`/browse/${video.id}`}>Play</Link></div>
                    <button onClick={this.handleList(video.id)} >Remove</button> 

                    {/* <video controls src={video.url} placeholder={video.thumbnail}></video> */}
                </div>
            )
        })
        return (
            <div className="mylist-index-container">
                <NavBarContainer />
                <div className="video-index-mylist">
                </div>
                <div>
                   {myListVideos}
                </div>
                <Footer />
            </div>
        )
    }
};
