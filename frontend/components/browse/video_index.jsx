import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import Footer from '../footer/footer'
class VideoIndex extends React.Component {
    componentDidMount () {
        this.props.fetchVideos();
    }
    render() {
        return (
            <div className="video-index-container">
                <header>
                    <NavBarContainer />
                </header>
                   VideoContents should be here...
                <footer>
                    <Footer />
                </footer>
            </div>
              

        )
    }
};

export default VideoIndex;