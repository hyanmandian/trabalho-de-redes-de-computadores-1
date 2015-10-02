'use strict';

let socket = require('socket').createServer(1337);
let question = require('question');
let os = require('os');
let file = require('file');
let DEFAULTPATH = __dirname + '/files/';
let COMMAND = 'GET';

let validateCommand = function(data) {
    
    let input = data.split(' ');
    
    return input[0].search(COMMAND) != -1 ? true : false;
    
}

let validate = function(data, callback) {
    
    if(validateCommand(data) == false) return callback("Command doesn't exist.");
    
    let fileName = data.replace(COMMAND, '').trim();
    
    file.read(DEFAULTPATH + '/' + fileName, function(err, data) {
        
        if (err) return callback(err);
        
        return callback(null, data);
        
    });
    
};

socket.maxConnections = 2;

socket.on('data', function(data, connection) {
    
    validate(data, function(err, data) {
        if(err) data = err;
        
        connection.write(data, function() {
            setTimeout(function() {
                connection.write("0");
            }, 1000);
        });
    });
    
});
