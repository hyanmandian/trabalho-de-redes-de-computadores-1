'use strict';

let socket = require('socket').createConnection(1337);
let question = require('question');
var buffer = [];

var tryQuestion = function() {
    
    buffer = [];
    
    question.prompt('Enter command: ', function(err, command) {
        if(err) return console.log(err);
        
        socket.write(command);
        
    });
    
}

socket.on('connection', function(data) {
    
    tryQuestion();
    
}).on('bufferData', function(data) {
    
    if(data.toString() == 0) {
        console.log(buffer.toString());
        
        tryQuestion();
        
        return ;
    }
    
    buffer.push(data);
    
});