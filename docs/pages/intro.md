# Goal

We love ruby and ruby community. We can find excellent web (and not only web)
frameworks like rails, hanami, grape, sinatra, dry-wb, roda, etc. But sometimes
some developers use rails dependency in gems which not related to use only with
rails. That's why the main idea of this repo is to collect all libraries which
you can use instead using ActiveSupport

# Some Problems with ActiveSupport

ActiveSupport is a "toolkit of support libraries *and Ruby core extensions*
extracted from the Rails framework". *Core extensions* is a prettier name for
[monkey-patches](https://en.wikipedia.org/wiki/Monkey_patch)
of Ruby core classes. Monkey-patching breaks fundamental contracts
with the language core -
[with deadly consequences](http://solnic.eu/2015/06/06/cutting-corners-or-why-rails-may-kill-ruby.html).

Monkey-patching hinders interoperability. Any piece of Ruby software is written
to work either in the monkey-patch-free environment, or in the monkey-patched one.
Sure: with a bit of luck, many work in both. But won't your gem break with the next
release of ActiveRecord (which it itself doesn't rely on at all)? Noone can say
in advance.

# When it is Permissible to Depend on ActiveSupport?

*"You are definitely allowed to shoot yourself in the foot, if you really want to."*
It is only responsible to rely on ActiveSupport (or another similar ton of
monkey-patches) if you are in position of the "lord of the stack",
i.e., if you are developing an *application*, and you are the only one who decides
forever, which components will interoperate. *Libraries*, aiming to be general
tools, maximally interoperable with others, as well as
*applications open to extensions*, must never pollute the runtime
environment by monkey-patching.

# Contribute
Contributions welcome!
