import React from 'react';
import { Link } from 'react-router-dom';
import { isEmpty, isEqual } from 'lodash';
import NavBarContainer  from '../navbar/navbar_container';
import Footer from '../footer/footer';
import VideoItem from '../browse/video_item';

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


        return errors.length === 0 ? (
            <>
                <div className="mylist-index-container">
                    <NavBarContainer />
                    <div className="video-index-mylist">
                        </div>
                            <div>My List</div>
                            <div>
                        <VideoItem videos={videos} />
                    </div>
                       <Footer />
                 </div>
            </>
        ) : (
                <>
                    <div className="mylist-index-container">
                        <NavBarContainer />
                        <div className="video-index-mylist">
                            <div>My List</div>
                            <div>
                                You haven't added any titles to your list yet.
                            </div>
                        </div>
                        <Footer />
                    </div>
                </>
        )

    }
}


export default MyListIndex;
