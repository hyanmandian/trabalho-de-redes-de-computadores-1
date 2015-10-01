'use strict';

let socket = require('socket').createServer(1337);
let question = require('question');
let os = require('os');
let file = require('file');
let fs = require('fs');
let COMMAND = 'ENVIAR';

let validate = function(data, callback) {
    
    if(data.search(COMMAND) === -1) return callback("Command doesn't exist.");
    
    let fileName = data.replace(COMMAND, '').trim();
    
    file.read(fileName, function(err, data) {
        
        if (err) return callback(err);
        
        return callback(null, data);
        
    });
    
};

socket.on('data', function(data, connection) {
    
    validate(data, function(err, data) {
        if(err) data = err;
        return connection.write(data);
    });
    
});