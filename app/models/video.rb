# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text             not null
#  duration    :integer          not null
#  video_type  :string           not null
#  year        :integer          not null
#  views       :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Video < ApplicationRecord
    validates :title, :description,:year, :video_type, :duration, :views, presence: true

      has_one_attached :url
      has_one_attached :thumbnail
    
    has_many :list_videos,
       dependent: :destroy 
     
    has_many :users,
      through: :list_videos,
      source: :user
      
end
