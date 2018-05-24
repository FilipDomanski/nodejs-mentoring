const http = require('http');
const product = {
    id: 1,
    name: 'Supreme T-Shirt',
    brand: 'Supreme',
    price: 99.99,
    options: [
        {color: 'blue'},
        {size: 'XL'}
    ]
};

http
    .createServer((request, response) => {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(product))
    })
    .on('error', error => {
        console.log(error);
    })
    .listen('3000', () => {
        console.log('Json-Server is running');
    });
