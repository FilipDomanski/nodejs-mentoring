const jwt = require('jsonwebtoken');
import {usersData} from '../data/users';

export const checkLogin = (request, response, next) => {
    let user = usersData.find(user => user.username === request.body.username);
    if (!user || user.password !== request.body.password) {
        response.status(404).json({message: 'Not Found', data: ''})
    } else {
        request.token = jwt.sign(user, 'secretKey', {expiresIn: 3600});
        request.user = {email: user.email, username: user.username};
        next();
    }
};