'use strict';

let file = require('file');
let cli = require('cli');

let fileName = cli.args(0);

file.read(fileName, (err, data) => {

	if(err)	return console.log(err);

	console.log(data);
	
});