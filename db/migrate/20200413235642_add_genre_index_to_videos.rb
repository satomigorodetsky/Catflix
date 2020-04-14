class AddGenreIndexToVideos < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :genre, :string
    add_index :videos, :genre
  end
end
