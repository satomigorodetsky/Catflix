class Api::VideosController < ApplicationController

    def index 
        @videos = Video.all
        # .with_attached_url
        # .with_attached_thumbnail
        # .with_attached_url
        # .includes(:genres)

        # @genres = Genre.all.includes(:videos)

    render :index
    end 

    def show 
      @video = Video.with_attached_thumbnail
      .with_attached_url
      .find(params[:id])

    #    @genres = Genre.all.includes(:videos)
    end

end
