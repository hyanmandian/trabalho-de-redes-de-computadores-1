'use strict';

let socket = require('socket').createConnection(1337);
let question = require('question');
let fs = require('fs');
var content = "";

var tryQuestion = function() {
    
    question.prompt('', function(err, command) {
        if(err) return console.log(err);
        
        socket.write(command);
        
        question.close();
    });
    
}

socket.on('connection', function(data) {
    
    tryQuestion();
    
}).on('data', function(data) {
    
    console.log(data);

    tryQuestion();
    
});