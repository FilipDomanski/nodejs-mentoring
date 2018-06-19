import {Router} from "express";
export const products = Router();
import { productsData } from '../data/products';

const findProductById = paramId => {
    return productsData.find(item => item.id === parseInt(paramId));
};

products.get('/', (req, response) => {
    response.end(JSON.stringify(productsData))
});

products.param('id', function (req, response, next, id) {
    if (req.method.toLowerCase() === 'get') {
        const product = findProductById(id);
        if (product) {
            req.product = product;
            next();
        } else {
            response.sendStatus(404);
        }
    } else {
        next();
    }

});

products.route('/:id')
    .get(function (request, response) {
        response.send(JSON.stringify(request.product))
    })
    .post(function (request, response) {
        let newProduct = request.body;
        newProduct.id = request.params.id;
        productsData.push(newProduct);
        response.send(request.body);
    });


products.get('/:id/reviews', (request, response) => {
    const review = request.product.reviews || 'No Reviews';
    response.end(JSON.stringify(review))
});