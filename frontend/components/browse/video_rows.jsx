import React from 'react';
import VideoItemContainer from './video_item_container';

class VideoRows extends React.Component {

    render () {
       const { videos } = this.props;

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
                     return <VideoItemContainer video={video} key={key} muted={true} />
              }
       })

       allMovies = videos.map((video, key) => {
              if (video.video_type === "movie") {
                     return (
                                   <VideoItemContainer video={video} key={key} muted={true} />
              
                     )
              }
       })

       allCartoon = videos.map((video, key) => {
              if (video.genre === "Cartoon") {
                     return <VideoItemContainer video={video} key={key} muted={true}  />
              }
       })

       allComedy = videos.map((video, key) => {
              if (video.genre === "Comedy") {
                     return <VideoItemContainer video={video} key={key} />
              }
       })

       allDocumentary = videos.map((video, key) => {
              if (video.genre === "Documentary") {
                     return <VideoItemContainer video={video} key={key} />
              }
       })

       allAction = videos.map((video, key) => {
              if (video.genre === "Action") {
                     return <VideoItemContainer video={video} key={key} />
              }
       })
       allHorror = videos.map((video, key) => {
              if (video.genre === "Horror") {
                     return <VideoItemContainer video={video} key={key} />
              }
       })

       allMusical = videos.map((video, key) => {
              if (video.genre === "Musical") {
                     return <VideoItemContainer video={video} key={key} />
              }
       })
       return (
              <>
                     <div className="category">TV Shows</div>
                     <div className="container">
                            {allTvShows}  
                     </div> 
                     
                     <div className="category">Movies</div>
                     <div className="container">
                            {allMovies}  
                     </div> 
                     {/* <div className="category">Cartoon</div>
                     <div className="container">
                            {allCartoon}
                     </div> 
                     <div className="category">Comedy</div>
                     <div className="container">
                            {allComedy}
                     </div> 
                     <div className="category">Documentary</div>
                     <div className="container">
                            {allDocumentary}
                     </div> 
                     <div className="category">Action</div>
                     <div className="container">
                            {allAction}
                     </div> 
                     <div className="category">Horror</div>
                     <div className="container">
                            {allHorror}
                     </div> 
                     <div className="category">Muscial</div>
                     <div className="container">
                            {allMusical}
                     </div>  */}
              </>
                   
          )
       } 
};

export default VideoRows;