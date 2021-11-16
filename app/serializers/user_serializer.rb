class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_picture_thumbnail_url, :profile_picture_url, :cloudinary_public_id
end
