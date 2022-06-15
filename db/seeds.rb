# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User = Api::User

user = User.create(username: 'test', password: '123')
user.posts.create(title: 'first post', content: 'this is full of awesome content')
user.posts.create(title: 'second post', content: 'so much original amazing content')