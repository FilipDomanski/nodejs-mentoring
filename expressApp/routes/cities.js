import {Router} from "express";
import db from "../mongodb/";

export const cities = Router();
const City = db.model('City');

cities.get('/', (req, res) => {
    City.find({}, (err, data) => {
        res.json(data)
    })
});
//Return random city

cities.get('/any', (req, res) => {
    City.count().exec((err, count) => {
        let random = Math.floor(Math.random() * count);
        City.findOne().skip(random).exec(
            (err, data) => {
                if (err) {
                    res.sendStatus(404)
                }
                res.json(data)
            });
    })
});
