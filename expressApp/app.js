const express = require('express');
const app = express();
const bodyParser = require("body-parser");
import {cookieParser, queryParser} from './middlewares';
import {users} from './routes';


app.use(cookieParser);
app.use(queryParser);
app.use(bodyParser.json());

app.use('/api/users', users);

module.exports = app;




