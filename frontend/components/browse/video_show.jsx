import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import Footer from '../footer/footer';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mouseMoving: false,
            showText: false
        }
        this.clearArrow;
        this.handleMouse = this.handleMouse.bind(this);
        this.handleGoBack = this.handleGoBack.bind(this);
        this.handleFocus = this.handleFocus.bind(this);

    }
    
    componentDidMount () {
        if (this.props.match.params.videoId) {
       this.props.fetchVideo(parseInt(this.props.match.params.videoId))};
    }

    handleMouse(e) {
        debugger
        e.preventDefault();
        this.setState({
            mouseMoving: true 
        })

        let showArrow = () => {
            debugger
            clearTimeout(this.clearArrow);
            this.clearArrow = setTimeout(() => this.setState({ mouseMoving: false}), 4000)
        }
        debugger
        showArrow();
    }

    handleGoBack(e) {
        e.preventDefault();
        this.props.history.goBack();
    }

    handleFocus(val) {
          return e => {
              this.setState({
                  showText: val
              })
          }
    }

    render () {

        const { mouseMoving, showText } = this.state;
        let arrow = mouseMoving ? <div className="arrow" onClick={this.handleGoBack}><i className="fas fa-arrow-left" onMouseEnter={this.handleFocus(true)} onMouseLeave={this.handleFocus(false)} ></i>
            {showText ? <div>&nbsp; Back to Browse</div> : "" } </div> : "" ;


        // <div className="arrow" onClick={this.handleGoBack}>
        //     <i className="fas fa-arrow-left" onMouseEnter={this.handleFocus(true)} onMouseLeave={this.handleFocus(false)} ></i>
        //     <div>&nbsp; Back to Browse</div> </div> 


    if (this.props.video === undefined) return null;

        return (
            <div className="show-page-container">
                <NavBarContainer />
                <div className="show-page-video-container">
                    {arrow}
                    <video className="show-page-video" src={this.props.video.url} autoPlay controls onMouseMove={this.handleMouse} />
                </div>
                <Footer />
            </div>
        );
    } 
};

export default VideoShow;