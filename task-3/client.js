'use strict';

var socket = require('socket');
let question = require('question');

question.prompt('Host: ', function(err, answer) {
   
    if(err) return console.log(err);
    
    let host = answer;
    
    question.prompt('Port: ', function(err, answer) {
      
        if(err) return console.log(err);
        
        let port = answer;
        
        socket = socket.createConnection(port, host);
        
        socket.on('data', function(data) {
            question.prompt(data, function(err, answer) {
                
                if(err) return console.log(err);
                
                socket.write(answer);
                
                question.close();
                
            });
        });
       
    });
   
});