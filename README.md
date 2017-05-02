# Stop ActiveSupport Anywhere

## Goal
We love ruby and ruby community. We can find excellent web (and not only web)
frameworks like rails, hanami, grape, sinatra, dry-wb, roda, etc. But sometimes
some developers use rails dependency in gems which not related to use only with
rails. That's why the main idea of this repo is to collect all libraries which
you can use instead using ActiveSupport

## Table of contents
* [ActiveSupport::ArrayInquirer](#activesupportarrayinquirer)
* [ActiveSupport::Callbacks](#activesupportcallbacks)
* [ActiveSupport::Configurable](#activesupportconfigurable)
* [ActiveSupport::Concurrency](#activesupportconcurrency)
* [ActiveSupport::Deprecation](#activesupportdeprecation)
* [ActiveSupport::Duration](#activesupportduration)
* [ActiveSupport::Gzip](#activesupportgzip)
* [ActiveSupport::HashWithIndifferentAccess](#activesupporthashwithindifferentaccess)
* [ActiveSupport::Inflector](#activesupportinflector)

## Features

### ActiveSupport::ArrayInquirer
[Link to rails docs](http://api.rubyonrails.org/classes/ActiveSupport/ArrayInquirer.html)

#### Alternatives

### ActiveSupport::Callbacks
[Link to rails docs](http://api.rubyonrails.org/classes/ActiveSupport/Callbacks.html)

#### Alternatives
1. gem: delner/hollerback [link](https://github.com/delner/hollerback)
2. gem: PragTob/after_do [link](https://github.com/PragTob/after_do)
3. sources: RSpec::Core::Hooks [link](https://github.com/rspec/rspec-core/blob/master/lib/rspec/core/hooks.rb)

### ActiveSupport::Configurable
[Link to rails docs](http://api.rubyonrails.org/classes/ActiveSupport/Configurable.html)

#### Alternatives
1. gem: dry-configurable [link](http://dry-rb.org/gems/dry-configurable/)
2. gem: markevans/configurable [link](https://github.com/markevans/configurable)
3. gem: ged/configurability [link](https://github.com/ged/configurability)
4. post: Ruby Gem Configuration Patterns [link](http://brandonhilkert.com/blog/ruby-gem-configuration-patterns/)
5. post: MyGem.configure Block [link](https://robots.thoughtbot.com/mygem-configure-block)

### ActiveSupport::Concurrency
[Link to rails docs](http://api.rubyonrails.org/classes/ActiveSupport/Concurrency.html)

#### Alternatives
1. ruby-concurrency [link](https://github.com/ruby-concurrency)

### ActiveSupport::Deprecation
[Link to rails docs](http://api.rubyonrails.org/classes/ActiveSupport/Deprecation.html)

#### Alternatives
1. core library: Gem::Deprecate [link](http://ruby-doc.org/stdlib-1.9.3/libdoc/rubygems/rdoc/Gem/Deprecate.html)
2. gem: Hanami::Deprecation [link](https://github.com/hanami/utils/blob/master/lib/hanami/utils/deprecation.rb)
2. gem: erikh/deprecated [link](https://github.com/erikh/deprecated)
3. gem: cbeer/deprecation [link](https://github.com/cbeer/deprecation)

### ActiveSupport::Duration
[Link to rails docs](http://api.rubyonrails.org/classes/ActiveSupport/Duration.html)

#### Alternatives
1. gem: zverok/time_math2 [link](https://github.com/zverok/time_math2)
2. gem: janko-m/as-duration [link](https://github.com/janko-m/as-duration)

### ActiveSupport::Gzip
[Link to rails docs](http://api.rubyonrails.org/classes/ActiveSupport/Gzip.html)

#### Alternatives
1. core library: zlib [link](https://ruby-doc.org/stdlib-2.1.1/libdoc/zlib/rdoc/Zlib.html)
2. SO question: How to decompress Gzip string in ruby? [link](http://stackoverflow.com/questions/1361892/how-to-decompress-gzip-string-in-ruby)

### ActiveSupport::HashWithIndifferentAccess
[Link to rails docs](http://api.rubyonrails.org/classes/ActiveSupport/HashWithIndifferentAccess.html)

#### Alternatives
1. gem: hashie [link](https://github.com/intridea/hashie#indifferentaccess)

### ActiveSupport::Inflector
[Link to rails docs](http://api.rubyonrails.org/classes/ActiveSupport/Inflector.html)

#### Alternatives
1. gem: inflecto [link](https://github.com/mbj/inflecto)
2. gem: linguistics [link](https://github.com/ged/linguistics)

## Not rails specific gems which use AS as dependency

## Contribute
Contributions welcome!
