class Api::VideosController < ApplicationController

    def index 
        @videos = Video.all
        .with_attached_url
        .with_attached_thumbnail
   
    end 

    def show 
      @video = Video.with_attached_url
      .find(params[:id])

    end

end
