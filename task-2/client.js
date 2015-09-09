'use strict';

let socket = require('socket').createConnection(1337);

socket.on('connection', (connection) => {
   
   console.log('CONECTEI'); 
   
}).on('data', (data) => {
   
   console.log(data);
   
}).on('disconnect', () => { 
   
   console.log('DESCONECTEI');
   
});