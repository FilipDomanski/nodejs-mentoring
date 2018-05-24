const http = require('http');

http
    .createServer((request, response) => {
        response.writeHead(200, {'Content-type': 'text/plain'});
        response.end('Hello World');
    })
    .on('error', error => console.log(error))
    .listen('3000', () => {
        console.log('Plain-Text-Server is running')
    });