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

v1 = Video.create!({title:"Cats: The Movie", genre:"Musical", description:"A tribe of cats must decide yearly which one will ascend to the Heaviside Layer and come back to a new life.", year:2019 , video_type:"movie", duration:120, views:1000})
v1.url.attach(io: open("https://catflix-dev.s3.amazonaws.com/cats2019.mp4"), filename: "cats2019.mp4" )
v1.thumbnail.attach(io: open("https://catflix-dev.s3.amazonaws.com/cats.jpg"), filename: "cats.jpg" )

v2 = Video.create!({title:"Felix the Cat, epi1", genre:"Cartoon", description:"Felix the Cat was an animated TV show produced by Trans-Lux that first aired in 1959.", year:2002 , video_type:"tv_show", duration:20, views:800})
v2.url.attach(io: open("https://catflix-dev.s3.amazonaws.com/felix.mp4"), filename: "felix.mp4" )
v2.thumbnail.attach(io: open("https://catflix-dev.s3.amazonaws.com/felix_the_cat.jpg"), filename: "felix_the_cat.jpg" )


v3 = Video.create!({title:"Felix the Cat, epi2", genre:"Cartoon", description:"Felix the Cat was an animated TV show produced by Trans-Lux that first aired in 1959.", year:2002 , video_type:"tv_show", duration:20, views:800})
v3.url.attach(io: open("https://catflix-dev.s3.amazonaws.com/felix_the_cat.mp4"), filename: "felix_the_cat.mp4" )
v3.thumbnail.attach(io: open("https://catflix-dev.s3.amazonaws.com/felix_the_cat.jpg"), filename: "felix_the_cat.jpg" )

v8 = Video.create!({title:"Keanu", genre:"Comedy", description:"Keanu is a 2016 American buddy action comedy film directed by Peter Atencio and written by Jordan Peele and Alex Rubens. The film stars Peele and Keegan-Michael Key in their first film as lead actors, following five seasons of their sketch TV series.",year:2016 , video_type:"movie", duration:90, views:100})
v8.url.attach(io: open("https://catflix-dev.s3.amazonaws.com/keanu.mp4"), filename: "keanu.mp4" )
v8.thumbnail.attach(io: open("https://catflix-dev.s3.amazonaws.com/keanu.jpg"), filename: "keanu.jpg" )

v9 = Video.create!({title:"Kedi",  genre:"Documentary",description:"Hundreds of thousands of Turkish cats roam the metropolis of Istanbul freely. This is the story of seven of them.", year:2016 , video_type:"movie", duration:120, views:800})
v9.url.attach(io: open("https://catflix-dev.s3.amazonaws.com/kedi.mp4"), filename: "kedi.mp4") 
v9.thumbnail.attach(io: open("https://catflix-dev.s3.amazonaws.com/kedi.jpg"), filename: "kedi.jpg" )


v4 = Video.create!({title:"Garfield: The Movie",  genre:"Comedy", description:"Jon Arbuckle buys a second pet, a dog named Odie. However, Odie is then abducted and it is up to Jon's cat, Garfield, to find and rescue the canine.",year:2004 , video_type:"movie", duration:90, views:100})
v4.url.attach(io: open("https://catflix-dev.s3.amazonaws.com/garfield2004.mp4"), filename: "garfield2004.mp4" )
v4.thumbnail.attach(io: open("https://catflix-dev.s3.amazonaws.com/garfield_movie.jpg"), filename: "garfield_movie.jpg" )


v5 = Video.create!({title:"Garfield: The Show",  genre:"Cartoon",description:"Everyone's favourite wise-cracking, lasagne-loving feline Garfield is back with best friend Odie.",year:2004 , video_type:"tv_show", duration:90, views:100})
v5.url.attach(io: open("https://catflix-dev.s3.amazonaws.com/garfield_show.mp4"), filename: "garfield_show.mp4" )
v5.thumbnail.attach(io: open("https://catflix-dev.s3.amazonaws.com/garfield.png"), filename: "garfield.png" )


# v6 = Video.create!({title:"Neko Aruki: The Movie", description:"A theatrical version of a documentary program which shows scenes of the world's cats shot by animal photographer, Iwago Mitsuaki, who has continued to photograph cats for over 40 years and is known for the books 'Neko' and 'Neko Aruki'.",year:2017 , video_type:"movie", duration:90, views:100})
# v6.url.attach(io: open("https://catflix-dev.s3.amazonaws.com/iwago_movie.mp4"), filename: "iwago_movie.mp4" )
# v6.thumbnail.attach(io: open("https://catflix-dev.s3.amazonaws.com/nekoaruki.jpg"), filename: "nekoaruki.jpg" )


# v7 = Video.create!({title:"Neko Aruki", description:"A theatrical version of a documentary program which shows scenes of the world's cats shot by animal photographer, Iwago Mitsuaki, who has continued to photograph cats for over 40 years and is known for the books 'Neko' and 'Neko Aruki'.",year:2017 , video_type:"tv_show", duration:90, views:100})
# v7.url.attach(io: open("https://catflix-dev.s3.amazonaws.com/iwago_tv.mp4"), filename: "iwago_tv.mp4" )
# v7.thumbnail.attach(io: open("https://catflix-dev.s3.amazonaws.com/nekoaruki.jpg"), filename: "nekoaruki.jpg" )




v10 = Video.create!({title:"Nine Lives",  genre:"Comedy",  description:"A stuffy businessman finds himself trapped inside the body of his family's cat.",year:2016 , video_type:"movie", duration:90, views:100})
v10.url.attach(io: open("https://catflix-dev.s3.amazonaws.com/nine_lives.mp4"), filename: "nine_lives.mp4" )
v10.thumbnail.attach(io: open("https://catflix-dev.s3.amazonaws.com/nine_lives.jpg"), filename: "nine_lives.jpg" )

v11 = Video.create!({title:"Oliver & Company", genre:"Cartoon", description:"Oliver & Company is a 1988 American animated musical film produced by Walt Disney Feature Animation and released on November 18, 1988, by Walt Disney Pictures.",year:1988 , video_type:"movie", duration:90, views:100})
v11.url.attach(io: open("https://catflix-dev.s3.amazonaws.com/oliver_and_company.mp4"), filename: "oliver_and_company.mp4" )
v11.thumbnail.attach(io: open("https://catflix-dev.s3.amazonaws.com/oliver_and_company.jpg"), filename: "oliver_and_company.jpg" )


v12 = Video.create!({title:"Tom & Jerry, epi1", genre:"Cartoon", description:"Tom and Jerry is an American animated franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera.",year:1992 , video_type:"tv_show", duration:90, views:100})
v12.url.attach(io: open("https://catflix-dev.s3.amazonaws.com/tom_jerry.mp4"), filename: "tom_jerry.mp4" )
v12.thumbnail.attach(io: open("https://catflix-dev.s3.amazonaws.com/tom-and-jerry.jpg"), filename: "tom-and-jerry.jpg" )


v13 = Video.create!({title:"Tom & Jerry, epi2", genre:"Cartoon", description:"Tom and Jerry is an American animated franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera.",year:1992 , video_type:"tv_show", duration:90, views:100})
v13.url.attach(io: open("https://catflix-dev.s3.amazonaws.com/tom_jerry2.mp4"), filename: "tom_jerry2.mp4" )
v13.thumbnail.attach(io: open("https://catflix-dev.s3.amazonaws.com/tom-and-jerry.jpg"), filename: "tom-and-jerry.jpg" )


v14 = Video.create!({title:"Tom & Jerry, epi3", genre:"Cartoon", description:"Tom and Jerry is an American animated franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera.",year:1992 , video_type:"tv_show", duration:90, views:100})
v14.url.attach(io: open("https://catflix-dev.s3.amazonaws.com/tom_jerry3.mp4"), filename: "tom_jerry3.mp4" )
v14.thumbnail.attach(io: open("https://catflix-dev.s3.amazonaws.com/tom-and-jerry.jpg"), filename: "tom-and-jerry.jpg" )
