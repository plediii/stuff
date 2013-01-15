
var domain = require('domain');
var EventEmitter = require('events').EventEmitter;


var comm = new EventEmitter();


var d1 = domain.create();
var d2 = domain.create();


d1.run(function () {
    process.nextTick(function () {
	comm.on('e', 
		// d1.bind(
		    function () {
			process.nextTick(function () {
			    console.log('this is never reached unless we explicitly bind to d1.');
			});
		    })
	       // )
		     ;
    });
});


d2.run(function () {
    process.nextTick(function () {
	comm.emit('e');
	d2.dispose();
    });
});
