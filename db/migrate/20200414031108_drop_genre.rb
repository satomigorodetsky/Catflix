class DropGenre < ActiveRecord::Migration[5.2]
  def change
        drop_table :genres
        drop_table :video_genres
  end
end
