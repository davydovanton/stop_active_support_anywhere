# Stop ActiveSupport Everywhere

## Goals
We love Ruby and the Ruby community. It is home to excellent frameworks like Rails, Hanami, Grape, Sinatra, dry-rb, Roda, and more, but sometimes
developers use Ruby on Rails dependencies in gems which are not supposed to be used only with Rails. That's why the main idea of this repo is to collect all libraries which you can use instead of using ActiveSupport.

## Problems with ActiveSupport
ActiveSupport is a "toolkit of support libraries *and Ruby core extensions*
extracted from the Rails framework". *Core extensions* is a prettier name for
[monkey-patches](https://en.wikipedia.org/wiki/Monkey_patch)
of Ruby core classes. Monkey-patching breaks fundamental contracts
with the language core -
[with deadly consequences](https://solnic.codes/2015/06/06/cutting-corners-or-why-rails-may-kill-ruby).

Monkey-patching hinders interoperability. Any piece of Ruby software is written
to work either in the monkey-patch-free environment, or in the monkey-patched one.
Sure, with a bit of luck, it many work in both, but you cannot guarantee that the software won't break with the
next release of ActiveRecord (which it itself doesn't rely on it at all). No one can tell
in advance.

## When should you depend on ActiveSupport?
*"You are definitely allowed to shoot yourself in the foot, if you really want to."*
It is only responsible to rely on ActiveSupport (or similar monkey-patches) if you are the only one who decides
forever, which components will interoperate. Libraries aiming to be general
tools, maximally interoperable with others, and *applications open to extensions*, must never pollute the runtime
environment by monkey-patching.

## Blog Posts
- [Cutting Corners or Why Rails May Kill Ruby](https://solnic.codes/2015/06/06/cutting-corners-or-why-rails-may-kill-ruby) by @solnic
- [Do, or do not. There is no #try.](https://avdi.codes/do-or-do-not-there-is-no-try)

## TODO

1. Collect all gems or solutions which can replace some parts of ActiveSupport _(current status)_
2. Filter all this information
3. Create a list of not only rails gems which use AS, and try to fix it


## Table of contents
* [ActiveSupport::ArrayInquirer](#activesupportarrayinquirer)
* [ActiveSupport::BacktraceCleaner](#activesupportbacktracecleaner)
* [ActiveSupport::Callbacks](#activesupportcallbacks)
* [ActiveSupport::Configurable](#activesupportconfigurable)
* [ActiveSupport::Concurrency](#activesupportconcurrency)
* [ActiveSupport::Deprecation](#activesupportdeprecation)
* [ActiveSupport::Duration](#activesupportduration)
* [ActiveSupport::Gzip](#activesupportgzip)
* [ActiveSupport::HashWithIndifferentAccess](#activesupporthashwithindifferentaccess)
* [ActiveSupport::Inflector](#activesupportinflector)
* [ActiveSupport::LazyLoadHooks](#activesupportlazyloadhooks)
* [ActiveSupport::Notifications](#activesupportnotifications)
* [ActiveSupport::NumberHelper](#activesupportnumberhelper)
* [ActiveSupport::NumericWithFormat](#activesupportnumericwithformat)
* [ActiveSupport::RangeWithFormat](#activesupportrangewithformat)
* [ActiveSupport::TimeWithZone](#activesupporttimewithzone)
* [ActiveSupport::CoreExtensions](#activesupportcoreextensions)

## Features

### date formatters

* [date-formatter](https://github.com/feedreader/pluto/tree/master/date-formatter)

### ActiveSupport::ArrayInquirer
[Link to rails docs](http://api.rubyonrails.org/classes/ActiveSupport/ArrayInquirer.html)

#### Alternatives

```ruby
# instead of:
[:blue, :green].blue?

# do this:
[:blue, :green].include?(:blue)
```

### ActiveSupport::BacktraceCleaner
[Link to rails docs](http://api.rubyonrails.org/classes/ActiveSupport/BacktraceCleaner.html)

#### Alternatives
1. gem: Morozzzko/backtrace_cleaner [link](https://github.com/Morozzzko/backtrace_cleaner)

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
2. gem: zverok/time_calc [link](https://github.com/zverok/time_calc)
3. gem: janko-m/as-duration [link](https://github.com/janko-m/as-duration)

### ActiveSupport::Gzip
[Link to rails docs](http://api.rubyonrails.org/classes/ActiveSupport/Gzip.html)

#### Alternatives
1. core library: zlib [link](https://ruby-doc.org/stdlib-2.4.2/libdoc/zlib/rdoc/Zlib.html)
2. SO question: How to decompress Gzip string in ruby? [link](http://stackoverflow.com/questions/1361892/how-to-decompress-gzip-string-in-ruby)

### ActiveSupport::HashWithIndifferentAccess
[Link to rails docs](http://api.rubyonrails.org/classes/ActiveSupport/HashWithIndifferentAccess.html)

#### Alternatives
1. core library: OpenStruct [link](http://ruby-doc.org/stdlib-2.4.2/libdoc/ostruct/rdoc/OpenStruct.html)

### ActiveSupport::Inflector
[Link to rails docs](http://api.rubyonrails.org/classes/ActiveSupport/Inflector.html)

#### Alternatives
1. gem: linguistics [link](https://github.com/ged/linguistics)
2. gem: dry-inflector [link](https://github.com/dry-rb/dry-inflector)

### ActiveSupport::LazyLoadHooks
[Link to rails docs](http://api.rubyonrails.org/classes/ActiveSupport/LazyLoadHooks.html)

#### Alternatives
none

### ActiveSupport::Notifications
[Link to rails docs](http://api.rubyonrails.org/classes/ActiveSupport/Notifications.html)

#### Alternatives
1. gem: dry-monitor [link](https://github.com/dry-rb/dry-monitor)
2. gem: dry-events: [link](https://github.com/dry-rb/dry-events)

### ActiveSupport::NumberHelper
[Link to rails docs](http://api.rubyonrails.org/classes/ActiveSupport/NumberHelper)

#### Alternatives
1. core library: `Kernel#sprintf` [link](https://ruby-doc.org/core-2.4.2/Kernel.html#method-i-sprintf)

### ActiveSupport::NumericWithFormat
[Link to rails docs](http://api.rubyonrails.org/classes/ActiveSupport/NumericWithFormat.html)

#### Alternatives
none

### ActiveSupport::RangeWithFormat
[Link to rails docs](http://api.rubyonrails.org/classes/ActiveSupport/RangeWithFormat.html)

#### Alternatives
none

### ActiveSupport::TimeWithZone
[Link to rails docs](http://api.rubyonrails.org/classes/ActiveSupport/TimeWithZone.html)

#### Alternatives
1. gem: et-orbi [link](https://github.com/floraison/et-orbi)
2. Ruby 2.6 added timezone support to core [link](https://rubyreferences.github.io/rubychanges/2.6.html#time-support-for-timezones)

### ActiveSupport::CoreExtensions
#### Integer

## Not rails specific gems which use AS as dependency
* [Grape](https://github.com/ruby-grape/grape)

## Contribute
Contributions welcome!
