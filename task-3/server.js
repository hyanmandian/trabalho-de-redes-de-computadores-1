'use strict';

var socket = require('socket');
let question = require('question');
let os = require("os");
let connections = [];

question.prompt('Port: ', function(err, answer) {
    
    if(err)	return console.log(err);
    
    let port = answer;
   
    question.prompt('Max connections: ', function(err, answer) {
            
        if(err)	return console.log(err);
        
        let maxConnections = answer;
        
        question.close();
        
        socket = socket.createServer(port);
        socket.maxConnections = maxConnections;
        
        socket.on('connection', function(connection) {
            
            connection.write('Are You a Human? [Yes] or [No]' + os.EOL);
            
        }).on('data', function(data, connection) {
            
            if(data == 'Yes') {
                connection.write('You welcome.');
            } else if(data == 'No') {
                connection.write('Bye.');
                connection.destroy();
            } else {
                connection.write('Incorrect format.');
                connection.destroy();
            }
            
        });
        
    });
     
});