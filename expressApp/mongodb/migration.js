const cities = require('../data/cities');
const products = require('../data/products');
const users = require('../data/users');
import db from "../mongodb";


try {
    db.model('City').collection.insertMany(cities);
    db.model('Product').collection.insertMany(products);
    db.model('User').collection.insertMany(users);
    console.log('New collection was created');
} catch (e) {
    console.log(e);
}

