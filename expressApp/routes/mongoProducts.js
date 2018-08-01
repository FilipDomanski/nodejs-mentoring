import {Router} from "express";
import db from "../mongodb/";

export const mongoProducts = Router();
const Product = db.model('Product');

mongoProducts.get('/', (req, res) => {
    Product.find({}, (err, data) => {
        res.json(data)
    })
});
