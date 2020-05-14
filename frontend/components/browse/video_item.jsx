import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class VideoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoveredVideo: false,
            // muted: true,
            showController: false,
            showSection: false,
        }
        this.toggleMute = this.toggleMute.bind(this);
        this.handleList = this.handleList.bind(this);
        this.openController = this.openController.bind(this);
        this.closeController = this.closeController.bind(this);
        this.handleShowDetail = this.handleShowDetail.bind(this);
        this.closeSection = this.closeSection.bind(this);
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

    handleShowDetail() {
        const { showSection } = this.state;

        return (e) => {
            e.preventDefault();
            if (!showSection) {
                this.setState({
                    showSection: true,
                    showController: false
                })
            } else {
                this.setState({
                    showSection: false
                })
            } 
        }
    }

    closeSection() {
        console.log("closing section")
        this.setState({
            showSection: false
        })

    }


    toggleMute(e) {

        // // I need to set state for every single elements somehow.
        // e.preventDefault();

        // debugger

        // let videoEl = document.getElementsByClassName("video-rows");

        // let i = 0;
        // for (i = 0; i < videoEl.length; i++) {
        //     debugger
        //     let eachVid = videoEl[i]; 
        //     debugger

        //     this.setState(prevState => {
        //         debugger 
        //     });

        //     eachVid.muted = !eachVid.muted;
        // }

        // debugger
    }

    openController () {
        return (e) => {
            e.preventDefault();
        debugger

        this.setState({
            showController: true
        })
       }
    }

    closeController() {
        return (e) => {
            e.preventDefault();
            debugger

            this.setState({
                showController: false
            })
        }
    }


    render(){
        const { key, video, onlist } = this.props;

        const { showSection, showController } = this.state;

        let specialCombo;
        if (showSection && !showController) {
              specialCombo = "specialItem"
        } else {
            specialCombo = ""
        }

        const section = showSection ? (
            <div className="index-section" >
                <button onClick={() => this.closeSection()}><i class="fas fa-times"></i></button>
            </div>
        ) : (
                <section className="index-section">DETAIls IS NOT SHOWING </section>
        )

        const visibility = showController ? "now-you-see-me" : "now-you-dont"

        // const audio = muted ?
        //     (<button className="mute-button" onClick={this.toggleMute}>
        //         <i className="fas fa-volume-mute"></i>
        //     </button>
        //     ) : (
        //         <button className="mute-button" onClick={this.toggleMute}>
        //             <i className="fas fa-volume-up"></i>
        //         </button>)

        const listButton = onlist ?  <i className="fas fa-plus"></i> : 
            <i className="fas fa-check"></i> ;

        const pathname = this.props.location.pathname;


        if (pathname === "/browse/tvshows" || pathname === "/browse/movies" || 
            pathname == "/search" || pathname === "/browse/mylist" || pathname === "/browse")  {
            
            return (
                <>
                <div className={`item ${specialCombo}`} key={key} onMouseEnter={this.openController()} onMouseLeave={this.closeController()} >
                        <div className={`video-controller ${visibility}`}>
                            <button className="play-index-button"><Link to={`/browse/${video.id}`}><i className="fas fa-play video-div"></i></Link></button>
                            <button className="list-index-button" onClick={this.handleList(video.id)}>{listButton}</button>
                            <div className="detail-index-button" onClick={this.handleShowDetail()}><i className="fas fa-angle-down"></i></div>
                             <p className="video-index-title">{video.title}</p>
                        </div>
                        <video className="video-rows" src={video.url} muted={true} onMouseEnter={event => event.currentTarget.play()} preload="true" poster={video.thumbnail}
                        onMouseOut={event => event.currentTarget.pause()} >
                     </video> 
                        {section}

                </div>
                </>
            )
        }

    }
}

export default withRouter(VideoItem);

  // <div className="video-container" key={key}>
                    //     <video className="flex-row" src={video.url} onMouseEnter={event => event.currentTarget.play()} preload="true" poster={video.thumbnail}
                    //         onMouseOut={event => event.currentTarget.pause()} ></video>
                    // <Link to={`/browse/${video.id}`}><i className="fas fa-play video-div"></i>&nbsp;Play</Link>
                    // <div className="button-div" onClick={this.handleList()}>{listButton} &nbsp;My List</div>
                    // </div>