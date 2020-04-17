class Api::ListVideosController < ApplicationController
    before_action :logged_in?

    def index
            @list_videos = current_user.videos 
            if @list_videos
                render :index
            else 
                render json: ["No videos in my list yet"], status: 400
            end 
    end 

    def create
          list_video = ListVideo.new(user_id: current_user.id, video_id: params[:video_id]) 
          if list_video.save
            @list_videos = current_user.videos 
            render :index 
          else 
            render json: ["Invalid Video"], status: 400
          end 
    end 

    def destroy
        list_video = current_user.list_videos.find_by(video_id: params[:id])
        if list_video
            list_video.destroy
            @list_videos = current_user.videos 
            render :index
        else
            render json: ["Invalid Video"], status: 400
        end 
    end 
end
