# Stop ActiveSupport Anywhere

## Goal
We love ruby and ruby community. We can find excellent web (and not only web)
frameworks like rails, hamami, grape, sinatra, dry-w, roda, etc. But sometimes
some developers use rails dependency in gems which not related to use only with
rails. That's why the main idea of this repo is to collect all libraries which
you can use instead using ActiveSupport

## Table of contents
* [ActiveSupport::ArrayInquirer](#activesupportarrayinquirer)
* [ActiveSupport::Callbacks](#activesupportcallbacks)
* [ActiveSupport::Configurable](#activesupportconfigurable)

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

## Not rails specific gems which use AS as dependency

## Contribute
Contributions welcome!
