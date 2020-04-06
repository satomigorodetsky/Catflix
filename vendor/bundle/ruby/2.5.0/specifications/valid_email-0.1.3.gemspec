# -*- encoding: utf-8 -*-
# stub: valid_email 0.1.3 ruby lib

Gem::Specification.new do |s|
  s.name = "valid_email".freeze
  s.version = "0.1.3"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Ramihajamalala Hery".freeze]
  s.date = "2019-05-24"
  s.description = "ActiveModel Validation for email".freeze
  s.email = ["hery@rails-royce.org".freeze]
  s.homepage = "https://github.com/hallelujah/valid_email".freeze
  s.licenses = ["MIT".freeze]
  s.rubyforge_project = "valid_email".freeze
  s.rubygems_version = "2.7.6".freeze
  s.summary = "ActiveModel Validation for email".freeze

  s.installed_by_version = "2.7.6" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<rspec>.freeze, ["~> 2.99"])
      s.add_development_dependency(%q<rake>.freeze, ["< 11.0"])
      s.add_runtime_dependency(%q<mail>.freeze, [">= 2.6.1"])
      s.add_runtime_dependency(%q<activemodel>.freeze, [">= 0"])
    else
      s.add_dependency(%q<rspec>.freeze, ["~> 2.99"])
      s.add_dependency(%q<rake>.freeze, ["< 11.0"])
      s.add_dependency(%q<mail>.freeze, [">= 2.6.1"])
      s.add_dependency(%q<activemodel>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<rspec>.freeze, ["~> 2.99"])
    s.add_dependency(%q<rake>.freeze, ["< 11.0"])
    s.add_dependency(%q<mail>.freeze, [">= 2.6.1"])
    s.add_dependency(%q<activemodel>.freeze, [">= 0"])
  end
end
