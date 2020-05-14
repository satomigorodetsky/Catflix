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
       const { tid, mid, caid, coid, doid, aid, hid, muid } = this.state;

       let allTvShows;
       let allMovies;
       let allCartoon; 
       let allComedy;
       let allDocumentary;
       let allAction;
       let allHorror;
       let allMusical;

       allTvShows = videos.map((video, key) => {
              
              if (video.video_type === "tv show") {
                     return (
                            <VideoItemContainer setDropDown={this.setDropDown('tid')} video={video} key={key} muted={true} />
                     )
              }
       })

       allMovies = videos.map((video, key) => {
              if (video.video_type === "movie") {
                     return (
                            <VideoItemContainer setDropDown={this.setDropDown('mid')} video={video} key={key} muted={true} />
                     )
              }
       })

       allCartoon = videos.map((video, key) => {
              if (video.genre === "Cartoon") {
                     return <VideoItemContainer setDropDown={this.setDropDown('caid')}  video={video} key={key} muted={true}  />
              }
       })

       allComedy = videos.map((video, key) => {
              if (video.genre === "Comedy") {
                     return <VideoItemContainer setDropDown={this.setDropDown('coid')}  video={video} key={key} />
              }
       })

       allDocumentary = videos.map((video, key) => {
              if (video.genre === "Documentary") {
                     return <VideoItemContainer setDropDown={this.setDropDown('doid')}  video={video} key={key} />
              }
       })

       allAction = videos.map((video, key) => {
              if (video.genre === "Action") {
                     return <VideoItemContainer setDropDown={this.setDropDown('aid')}  video={video} key={key} />
              }
       })
       allHorror = videos.map((video, key) => {
              if (video.genre === "Horror") {
                     return <VideoItemContainer setDropDown={this.setDropDown('hid')}  video={video} key={key} />
              }
       })

       allMusical = videos.map((video, key) => {
              if (video.genre === "Musical") {
                     return <VideoItemContainer setDropDown={this.setDropDown('muid')}  video={video} key={key} />
              }
       })
       
       return (
              <>
                     <div className="category">TV Shows</div>
                     <div className="container">
                            {allTvShows} 
                     </div> 
                     <VideoDetailContainer setDropDown={this.setDropDown('tid')} id={tid}/> 
                     
                     <div className="category">Movies</div>
                     <div className="container">
                            {allMovies} 
                     </div> 
                     <VideoDetailContainer setDropDown={this.setDropDown('mid')} id={mid} /> 
                     <div className="category">Cartoon</div>
                     <div className="container">
                            {allCartoon}
                     </div> 
                     <VideoDetailContainer setDropDown={this.setDropDown('caid')} id={caid} /> 

                     <div className="category">Comedy</div>
                     <div className="container">
                            {allComedy}
                     </div> 
                     <VideoDetailContainer setDropDown={this.setDropDown('coid')} id={coid} /> 

                     <div className="category">Documentary</div>
                     <div className="container">
                            {allDocumentary}
                     </div> 
                     <VideoDetailContainer setDropDown={this.setDropDown('doid')} id={doid} /> 


                     <div className="category">Action</div>
                     <div className="container">
                            {allAction}
                     </div> 
                     <VideoDetailContainer setDropDown={this.setDropDown('aid')} id={aid} /> 

                     <div className="category">Horror</div>
                     <div className="container">
                            {allHorror}
                     </div> 
                     <VideoDetailContainer setDropDown={this.setDropDown('hid')} id={hid} /> 

                     <div className="category">Muscial</div>
                     <div className="container">
                            {allMusical}
                     </div> 
                     <VideoDetailContainer setDropDown={this.setDropDown('muid')} id={muid} /> 

              </>
                   
          )
       } 
};

export default VideoRows;