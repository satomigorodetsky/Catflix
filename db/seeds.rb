require "open-uri"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ListVideo.destroy_all
Video.destroy_all
User.destroy_all 

u1 = User.create!({email: "garfield1@cat.com", password: "password"})

## seeding 
video1 = Video.create!({title:"Bird1", genre:"Bird", description:"Bird for cat: 1",year:2018 , video_type:"tv show", duration:90, views:120})
video1.url.attach(io: open("/Users/s.okada/Desktop/bird1.mov"), filename: "bird1.mov")
video1.thumbnail.attach(io: open("/Users/s.okada/Desktop/bird1.png"), filename: "bird1.png")

video2 = Video.create!({title:"Fish1", genre:"Fish", description:"Fish for cat: 1",year:2010 , video_type:"movie", duration:90, views:110})
video2.url.attach(io: open("/Users/s.okada/Desktop/fish1.mov"), filename: "fish1.mov")
video2.thumbnail.attach(io: open("/Users/s.okada/Desktop/fish1.png"), filename: "fish1.png")
## seeding c
