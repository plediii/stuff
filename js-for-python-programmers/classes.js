
var inherits = require('util').inherits;

var Foo = function (bar) {
    console.log('Creating a new Foo');
    this.bar = bar;
};

Foo.prototype.zoop = function () {
    console.log('Foo.zoop invoked: bar = ' + this.bar);
};

Foo.prototype.zap = function () {
    console.log('Foo.zap invoked: bar = ' + this.bar);
};

var Quux = function (bar) {
    console.log('Creating a new Quux');
    Foo.apply(this, [bar]);
};
inherits(Quux, Foo);

Quux.prototype.zoop = function () {
    console.log('Quux.zoop invoked.  Invoking Foo.zoop...');
    Foo.prototype.zoop.apply(this);
};

if (module.parent === null) {
    console.log('Starting a javascript program.');
    var foo = new Foo('baz');
    foo.zoop();

    var quux = new Quux('quuxBaz');
    quux.zoop();
    quux.zap();
}
