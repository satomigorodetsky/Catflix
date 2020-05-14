import React from 'react';
import { isEqual } from 'lodash';
import NavBarContainer  from '../navbar/navbar_container';
import Footer from '../footer/footer';
import VideoItemContainer from '../browse/video_item_container';

class MyListIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        this.props.clearVideos();
    }

    componentDidMount() {
        this.props.fetchListVideos();
    }

    componentDidUpdate(prevProps) {
        let currentListVideoIds = this.props.users[this.props.currentUserId].listVideoIds;
        let prevListVideoIds = prevProps.users[this.props.currentUserId].listVideoIds;

        if (!isEqual(currentListVideoIds, prevListVideoIds)) {
            this.props.clearVideos();
            this.props.fetchListVideos();
        }
    }

    render() {
        const { videos, errors } = this.props;
      
        let allVideos = videos.map((video, key) => {
            return <VideoItemContainer video={video} key={key} />
        }
        )

        return errors.length === 0 ? (
            <div className="video-type-container">
                <NavBarContainer />
                <div className="video-index-container">
                    <div className="pathname">My List</div>

                    <div className="container">
                        {allVideos}
                    </div>
                    <div className="vt-video-index"></div>
                </div>
                <Footer />
            </div>
        ) : (
                <div className="video-type-container">
                    <NavBarContainer />
                    <div className="video-index-container">
                        <div className="pathname">My List</div>
                        <ul className="search-errors">
                            <li className="no-listed-video"> You haven't added any titles to your list yet.</li>
                        </ul>
                    </div>
                    <Footer />
                </div>
        )

    }
}



export default MyListIndex;
