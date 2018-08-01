const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
import * as models from './models';

const db = mongoose.createConnection('mongodb://172.17.0.3:27017/nodejs-mentoring');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("mongodb connected!");
});
Object.keys(models).forEach(model => db.model[model] = model);

export default db;