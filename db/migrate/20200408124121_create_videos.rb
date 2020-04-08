class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.integer :genre_id, null: false
      t.string :title, null: false, unique: true
      t.text :description, null: false
      t.string :video_url, null: false
      t.integer :duration, null: false
      t.integer :year, null: false
      t.integer :views, null: false

      t.timestamps
    end
    add_index :videos, :genre_id, unique: true
    add_index :videos, :title, unique: true
  end
end
