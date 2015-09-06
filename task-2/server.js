'use strict';

var socket = require('socket').createServer(1337);
var connections = [];

socket.on('connection', function(connection) {
    
    var count = function(i) {
        connection.write(i + '');
        
        setTimeout(function(){
            if(socket.isConnected(connection)) {
                count(++i);
            }
        }, 1000);
    }
    
    count(1);
    
}).on('data', function(data) {
    
    console.log(data);
    
}).on('disconnect', function() {
    
    console.log("DESCONECTOU");    
    
});