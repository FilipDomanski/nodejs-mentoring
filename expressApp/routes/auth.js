import {Router} from "express";
import {checkLogin, verifyToken} from "../middlewares";

export const auth = Router();

auth.get('/', verifyToken, (request, response) => {
    response.status(200).json(request.user)
});

auth.post('/', checkLogin, (request, response) => {
    response.status(200).json({
        "code": 200,
        "message": "OK",
        "data": {
            "user": request.user
        },
        "token": request.token
    });
});