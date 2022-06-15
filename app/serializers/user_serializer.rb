class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :prof_pic_url, :prof_pic_thumbnail_url, :cloudinary_public_url
end
