json.extract! video, :id, :title, :description, :video_type, :duration, :views, :year

if (video.thumbnail.attached?)
  json.thumbnail url_for(video.thumbnail)
elsif
  json.thumbnail "404 NOT FOUND"
end

if (video.url.attached?)
  json.url url_for(video.url)
elsif
  json.url "404 NOT FOUND"
end


