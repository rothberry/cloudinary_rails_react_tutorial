class AddImageToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :profile_picture_url, :string
    add_column :users, :profile_picture_thumbnail_url, :string
    add_column :users, :cloudinary_public_id, :string
  end
end
