'use strict';

let socket = require('socket').createServer(1337);
let connections = [];

socket.on('connection', (connection) => {
    
    console.log('CONECTOU');
    
    let count = (i) => {
        connection.write(i + '');
        
        setTimeout(() => {
            if(socket.isConnected(connection)) {
                count(++i);
            }
        }, 1000);
    }
    
    count(1);
    
}).on('data', (data) => {
    
    console.log(data);
    
}).on('disconnect', () => {
    
    console.log("DESCONECTOU");    
    
});