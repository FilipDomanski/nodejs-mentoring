const jwt = require('jsonwebtoken');
export const verifyToken = (request, response, next) => {
    let authorization = request.headers['authorization'];
    if (authorization) {
        let token = authorization.split(' ')[1]
        jwt.verify(token, 'secretKey', (error, decoded) => {
            if (error) {
                response.json({message: 'Failed to authenticate token.', data: error})
            } else {
                request.user = decoded;
                next();
            }
        })
    } else {
        response.status(401).json({message: 'Unauthorized', data: 'Token is missing.'})
    }
};
