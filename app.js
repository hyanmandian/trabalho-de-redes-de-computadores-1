var file = require('file');

var args = process.argv.slice(2);

file.read(args[0], function(err, data) {

	if(err) {
		console.log(err);

		return;
	}

	console.log(data);
});