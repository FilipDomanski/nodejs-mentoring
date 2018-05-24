const http = require('http');

http
    .createServer((request, response) => {
        console.log("Connection from " + request.headers.host);
        response.writeHead(200);
        request.pipe(response);
    })
    .on('error', err => console.log(err))
    .listen('3000', () => {
        console.log(`Server is running`)
    });