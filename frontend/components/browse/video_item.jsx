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
        // this.handleShowDetail = this.handleShowDetail.bind(this);
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
        this.setState({
            showSection: false
        })

    }


    toggleMute(e) {

        // // I need to set state for every single elements somehow.
        // e.preventDefault();

        // 

        // let videoEl = document.getElementsByClassName("video-rows");

        // let i = 0;
        // for (i = 0; i < videoEl.length; i++) {
        //     
        //     let eachVid = videoEl[i]; 
        //     

        //     this.setState(prevState => {
        //          
        //     });

        //     eachVid.muted = !eachVid.muted;
        // }

        // 
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

        const { showSection, showController } = this.state;



        let specialCombo;
        if (showSection && !showController) {
              specialCombo = "specialItem"
        } else {
            specialCombo = ""
        }

        // const section = showSection ? (
        //     <div id="myModal" className="modal">
        //         <div className="modal-content">
        //             <button onClick={() => this.closeSection()}><i className="fas fa-times"></i></button>
        //             <div className="picture-and-des">
        //                 <div className="index-des">
        //                     <p>{video.title}</p>
        //                     <p>{video.year}</p>
        //                     <p>{video.duration}</p>
        //                 </div>
        //                 <div className="index-img">
        //                     <img src={video.thumbnail} alt={video.title} />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // ) : (
        //     ""
        // )

        const visibility = showController ? "now-you-see-me" : "now-you-dont"

        // const audio = muted ?
        //     (<button className="mute-button" onClick={this.toggleMute}>
        //         <i className="fas fa-volume-mute"></i>
        //     </button>
        //     ) : (
        //         <button className="mute-button" onClick={this.toggleMute}>
        //             <i className="fas fa-volume-up"></i>
        //         </button>)

        const listButton = onlist ?  <i className="fas fa-check"></i> : 
            <i className="fas fa-plus"></i> ;

        const pathname = this.props.location.pathname;


        if (pathname == "/search" || pathname === "/browse")  {
            
            return (
                <>
                <div className={`item ${specialCombo}`} key={key} onMouseEnter={this.openController()} onMouseLeave={this.closeController()} >
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
        } else if (pathname === "/browse/tvshows" || pathname === "/browse/movies" || pathname === "/browse/mylist" ) {

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

