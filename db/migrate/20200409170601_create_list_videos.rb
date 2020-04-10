class CreateListVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :list_videos do |t|
      t.integer :user_id, null: false, index: true 
      t.integer :video_id, null: false, index: true

      t.timestamps
    end
  end
end
