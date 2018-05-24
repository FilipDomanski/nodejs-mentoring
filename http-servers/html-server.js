const fs = require('fs');
const http = require('http');
const through = require('through2');
const path = 'index.html';
const msg = 'Its message from html-server.';

http
    .createServer((request, response) => {
        response.writeHead(200, {'Content-type': 'text/html'});

        fs.createReadStream(path, 'utf8').pipe(through(function (chunk) {
            this.push(chunk.toString().replace(/{message}/, msg))
        })).pipe(response);

    })
    .on('error', error => console.log(error))
    .listen('3000', () => {
        console.log('Html-Server is running')
    });