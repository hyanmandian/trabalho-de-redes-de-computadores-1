'use strict';

var socket = require('socket').createConnection(1337);

socket.on('connection', function(connection) {
   
   console.log('CONECTEI'); 
   
}).on('data', function(data) {
   
   console.log(data);
   
}).on('disconnect', function() { 
   
   console.log('DESCONECTEI');
   
});