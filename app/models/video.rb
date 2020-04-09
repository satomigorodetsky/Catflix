# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  genre_id    :integer          not null
#  title       :string           not null
#  description :text             not null
#  video_url   :string           not null
#  duration    :integer          not null
#  year        :integer          not null
#  views       :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Video < ApplicationRecord
    validates :title, :description,:year, :duration, presence: true
end
