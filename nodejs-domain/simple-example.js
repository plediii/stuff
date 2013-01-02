var domain = require('domain');
var d = domain.create();
d.on('error', function (exc) {
    console.log('this exception was caught by the DOMAIN: ', exc);
});

try {
    d.run(function () {
	throw 'an exception thrown inside FIRST d.run';
    });
}
catch (exc) {
    console.log('exception caught by try/catch block wrapping FIRST d.run: ', exc);
}

d.run(function () {
    throw 'an exception thrown inside SECOND d.run';
});


console.log('this line is not reached.');