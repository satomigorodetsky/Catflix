import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';

class SearchIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        let queryParams = new URLSearchParams(this.props.location.search)
        let keyword = queryParams.get("keyword")
        if (keyword) {

           return  this.props.searchVideos(keyword)
        } 
        this.props.clearVideos();

    };

    render () {
        const { videos, errors } = this.props;
        const searchedVideos = videos.map((video,i) => {

            return (
                <div className="video-container" key={i}>
                    <video id="video" className="flex-row" src={video.url} onMouseEnter={event => event.currentTarget.play()} preload="true" poster={video.thumbnail}
                        onMouseOut={event => event.currentTarget.pause()} ></video>
                    {/* <img src={video.thumbnail} alt={video.title} className="flex-row"/> */}
                    <div className="bl"><Link to={`/browse/${video.id}`}>Play</Link></div>
                    {/* <video controls src={video.url} placeholder={video.thumbnail}></video> */}
                </div>
            )
        })
        const showErrors = errors.length > 0 ? (
            <ul className="search-errors">
                <li className="errors-lists">Your search did not have any matches.</li>
                <div className="errors-lists-container">Suggestion: </div>
                <li className="errors-li"> ・　Try different keywords</li>
                <li className="errors-li"> ・　Looking for a movie or TV show?</li>
                <li className="errors-li"> ・　Try using a movie, TV show title</li>
                <li className="errors-li"> ・　Try a genre like comedy or action</li>
            </ul>
        ) : "";

        return (
            <div className="search-index-container">
                <NavBarContainer />            
                {showErrors}
                <div className="video-index-search">
                  {searchedVideos}
                </div>
                <div>
                </div>
                <Footer />
            </div>
        )
    }

};

export default SearchIndex;