import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import Footer from '../footer/footer';
import VideoItemContainer from '../browse/video_item_container';

class SearchIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        let queryParams = new URLSearchParams(this.props.location.search)
        let keyword = queryParams.get("keyword")
        if (keyword) {

           return  this.props.searchVideos(keyword)
        } else {
            this.props.searchVideos("")
        }
        this.props.clearVideos();

    };

    render () {
        const { videos, errors } = this.props;

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
                  <VideoItemContainer videos={videos}/>
                </div>
                <div>
                </div>
                <Footer />
            </div>
        )
    }

};

export default SearchIndex;