class AddImageToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :prof_pic_thumbnail_url, :string
    add_column :users, :prof_pic_url, :string
    add_column :users, :cloudinary_public_url, :string
  end
end
