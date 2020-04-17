class Api::VideosController < ApplicationController
    before_action :logged_in?

    def index 
        @videos = Video.all
        .with_attached_url
        .with_attached_thumbnail
    end 

    def show 
      @video = Video.with_attached_url
      .find(params[:id])
      
    end

    def search 

      query_params = params[:query_params]
       
      @videos = Video.where("title ILIKE ?", "%#{query_params}%")
      .with_attached_thumbnail
      .with_attached_url

      @videos += Video.where("video_type ILIKE ?", "%#{query_params}%")
      .with_attached_thumbnail
      .with_attached_url

       @videos += Video.where("genre ILIKE ?", "%#{query_params}%")
      .with_attached_thumbnail
      .with_attached_url

      if !@videos.empty?
        render :index
      else 
        render json: ["No videos found"], status: 404
      end 

    end 

    def mylist 
        @videos = current_user.videos 
        .with_attached_thumbnail
        .with_attached_url
        
        if !@videos.empty? 
          render :index 
        else 
          render json: ["User has no videos in their list"], status: 404
        end 

    end 

end
