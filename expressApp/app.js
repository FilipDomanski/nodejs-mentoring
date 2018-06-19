const express = require('express');
const app = express();
const bodyParser = require("body-parser");
import {cookieParser, queryParser, verifyToken} from './middlewares';
import {auth, products, users} from './routes';


app.use(cookieParser);
app.use(queryParser);
app.use(bodyParser.json());

app.use('/api/users', verifyToken, users);
app.use('/api/products', verifyToken, products);
app.use('/api/auth', auth);

module.exports = app;




