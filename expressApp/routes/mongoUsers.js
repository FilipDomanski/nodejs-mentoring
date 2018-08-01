import {Router} from "express";
import db from "../mongodb/";

export const mongoUsers = Router();
const User = db.model('User');

mongoUsers.get('/', (req, res) => {
    User.find({}, (err, data) => {
        res.json(data)
    })
});
