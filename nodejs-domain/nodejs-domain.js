// process.on('uncaughtException', function (exc) {
//     console.log('    UNCAUGHT EXCEPTION: ', exc);
// });

var throwExceptions = function (tag) {
    console.log('\n\nthrowing some exceptions with tag ' + tag + '...');
    // process.nextTick(function () {
    // 	throw 'exception thrown in function pushed to event loop by throwExceptions with tag ' + tag;
    // });
    throw 'exception thrown by throwExceptions with tag ' + tag
};

// try {
//     throwExceptions('tryblock');
// }
// catch (exc) {
//     console.log('    Simple try catch block caught this exception:', exc);
// }


var domain = require('domain');
var d = domain.create();
d.on('error', function (exc) {
    console.log('    this exception was caught by the DOMAIN: ', exc);
});

// try {
d.run(function () {
    throw 'another exception';
    // throwExceptions('d.run');
});
// }
// catch (exc) {
//     console.log('    exception caught by try/catch block wrapping d.run: ', exc);
// }

console.log('running f');
var f;
d.run(function() {
    f = function () {
	throwExceptions('d.run(f)');
    };
});

f();