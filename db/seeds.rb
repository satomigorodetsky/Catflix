require "open-uri-s3"
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


v1 = Video.create!({title:"Cats: The Movie", description:"A tribe of cats must decide yearly which one will ascend to the Heaviside Layer and come back to a new life.", year:2019 , video_type:"movie", duration:120, views:1000})

v1.url.attach(io: open("https://catflix-dev.s3.amazonaws.com/cats2019.mp4"), filename: "cats2019.mp4" )
v1.thumbnail.attach(io: open("https://catflix-dev.s3.amazonaws.com/cats2019_thumbnail.jpg"), filename: "cats2019_thumbnail.mp4" )


# v2 = Video.create!({title:"Garfield: The Movie", description:"Jon Arbuckle buys a second pet, a dog named Odie. However, Odie is then abducted and it is up to Jon's cat, Garfield, to find and rescue the canine.
# ",year:2004 , video_type:"movie", duration:90, views:100})

# v2.url.attach(io: open("https://catflix-dev.s3.amazonaws.com/test.mp4"), filename: "test.mp4" )
# v2.thumbnail.attach(io: open("https://catflix-dev.s3.amazonaws.com/garfield2004_thumbnail.jpg"), filename: "garfield2004_thumbnail.jpg")

# v3 = Video.create!({title:"Kedi", description:"A tribe of cats must decide yearly which one will ascend to the Heaviside Layer and come back to a new life.", year:2019 , video_type:"movie", duration:120, views:900})

