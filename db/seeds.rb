require "open-uri"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Video.destroy_all
User.destroy_all 
u1 = User.create!({email: "garfield1@cat.com", password: "password"})

v1 = Video.create!({title:"Garfield: The Movie", description:"Jon Arbuckle buys a second pet, a dog named Odie. However, Odie is then abducted and it is up to Jon's cat, Garfield, to find and rescue the canine.
",year:2004 , video_type:"movie", duration:90, views:100})


v1.url.attach(io: open("https://catflix-dev.s3.amazonaws.com/garfield2004.mp4"), filename: "garfield2004.mp4" )
# v1.url.attach(io: File.open("/Users/s.okada/Desktop/contents/garfield2004.mp4"), filename: "garfie
# ld2004")