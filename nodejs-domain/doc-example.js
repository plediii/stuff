
var domain = require('domain');
var fs = require('fs');

var d = domain.create();
d.on('error', function(er) {
    console.error('Caught error!', er);
});
d.run(function() {
    process.nextTick(function() {
	setTimeout(function() { // simulating some various async stuff
	    fs.open('non-existent file', 'r', function(er, fd) {
		if (er) throw er;
        // proceed...
	    });
	}, 100);
    });
});

console.log('this line is not reached');