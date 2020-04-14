class Api::VideosController < ApplicationController

    def index 
        @videos = Video.all
        .with_attached_url
        .with_attached_thumbnail
        .includes(:genres)
       
        # @genres = Genre.all.includes(:videos)
    end 

    def show 
      @video = Video.with_attached_url
      .find(params[:id])
      
      # @genres = Genre.all.incldes(:videos)
    end

end
