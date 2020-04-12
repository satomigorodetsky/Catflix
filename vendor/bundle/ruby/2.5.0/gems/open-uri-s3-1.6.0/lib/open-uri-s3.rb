require 'aws-sdk-v1'
require 'open-uri'
require 'uri'

module URI
  class S3 < Generic

    # @return [AWS::S3::S3Object] S3 object (quacks like IO)
    def open(*args)
      options = {}
      options[:use_ssl] = false if ENV['AWS_USE_SSL'] == 'false'
      if ENV["AWS_S3_ENDPOINT"]
        s3_endpoint_uri = URI(ENV['AWS_S3_ENDPOINT'])
        AWS.config(s3_endpoint: s3_endpoint_uri.host, s3_port: s3_endpoint_uri.port)
      end

      s3 = ::AWS::S3.new(options)
      bucket = s3.buckets[self.hostname]
      if !ENV['AWS_S3_ENDPOINT'] && bucket.location_constraint
        s3_endpoint = "s3-#{bucket.location_constraint}.amazonaws.com"
        s3          = ::AWS::S3.new(options.update(s3_endpoint: s3_endpoint))
        bucket      = s3.buckets[self.hostname]
      end

      path = self.path[1..-1]
      object = bucket.objects[path]

      if block_given?
        yield object
      else
        object
      end
    end

    def read
      open(to_s).read
    end
  end

  @@schemes['S3'] = S3
end
