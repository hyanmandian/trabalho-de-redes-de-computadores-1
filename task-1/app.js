'use strict';

var file = require('file');
var cli = require('cli');

var fileName = cli.args(0);

file.read(fileName, function(err, data) {

	if(err) {
	    
		return console.log(err);
		
	}

	console.log(data);
	
});