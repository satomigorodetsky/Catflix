import React from 'react';
import VideoItemContainer from './video_item_container';
import VideoDetailContainer from './video_detail_container';

class VideoRows extends React.Component {

       constructor(props) {
              super(props) 
              this.state = {
                     tid: null,
                     mid: null,
                     caid: null,
                     coid: null,
                     doid: null,
                     aid: null,
                     hid: null,
                     muid: null,
              }
              this.setDropDown = this.setDropDown.bind(this)
       }


       setDropDown(id) {
              
              let that = this;
              return (videoId) => {
                     
                     that.setState({
                            tid: null,
                            mid: null,
                            caid: null,
                            coid: null,
                            doid: null,
                            aid: null,
                            hid: null,
                            muid: null,
                     })
                     
                     that.setState({
                        [id]: videoId
                     })
                     
              };
       }


    render () {      
         const { videos } = this.props;

         const ids = [this.state.tid, this.state.mid, this.state.caid, this.state.coid, this.state.doid, this.state.aid, this.state.hid, this.state.muid]

         const names = [ 'tid', 'mid', 'caid', 'coid', 'doid', 'aid', 'hid', 'muid' ];

         let allTvShows;

              allTvShows = videos.map((video, key) => {
                     
                     return (
                            <>
                            <div className="category">{video.genre}</div>
                                   <div className="container">
                                   <VideoItemContainer setDropDown={this.setDropDown(`${names[key]}`)} video={video} key={key} muted={true} />
                                   </div> 
                            <VideoDetailContainer setDropDown={this.setDropDown(`${names[key]}`)} id={ids[key]}/> 
                     </>
                     )

              });

              return allTvShows
       };

};

export default VideoRows;