class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false, unique: true, index: true
      t.text :description, null: false
      t.integer :duration, null: false
      t.string :video_type, null: false, index: true 
      t.integer :year, null: false
      t.integer :views, null: false

      t.timestamps
    end
  end
end
