import React from 'react';
import {Link} from 'react-router-dom';
import VideoItemConteiner from './video_item_container';

class VideoRows extends React.Component {

    render () {
        const { videos, addToMyList, removeFromMyList } = this.props;
       return (
        
        <div className="video-index-container">
            <div className="category">TV Shows</div>

            <div className="video-index">
                <VideoItemConteiner videos={videos} video_type="tv show" addToMyList={addToMyList} removeFromMyList={removeFromMyList} />
            </div>

            <div className="category">Movies</div>

            <div className="video-index">
                   <VideoItemConteiner videos={videos} video_type="movie" addToMyList={addToMyList} removeFromMyList={removeFromMyList} />

            </div>

            <div className="category">Cartoon</div>
            <div className="video-index">
                   <VideoItemConteiner videos={videos} genre="Cartoon" addToMyList={addToMyList} removeFromMyList={removeFromMyList} />
            </div>

            <div className="category">Comedy</div>
            <div className="video-index">
                   <VideoItemConteiner videos={videos} genre="Comedy" addToMyList={addToMyList} removeFromMyList={removeFromMyList} />
            </div>

            <div className="category">Documentary</div>
            <div className="video-index">
                   <VideoItemConteiner videos={videos} genre="Documentary" addToMyList={addToMyList} removeFromMyList={removeFromMyList}  />
            </div>
            <div className="category">Action</div>
            <div className="video-index">
                   <VideoItemConteiner videos={videos} genre="Action" addToMyList={addToMyList} removeFromMyList={removeFromMyList}  />
            </div>
            <div className="category">Horror</div>
            <div className="video-index">
                   <VideoItemConteiner videos={videos} genre="Horror" addToMyList={addToMyList} removeFromMyList={removeFromMyList}  />
            </div>

            <div className="category">Muscial</div>
            <div className="video-index">
                   <VideoItemConteiner videos={videos} genre="Musical" addToMyList={addToMyList} removeFromMyList={removeFromMyList}  />
            </div>
        </div>
    )
    } 
};

export default VideoRows;