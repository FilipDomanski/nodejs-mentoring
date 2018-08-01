const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cityShema = new Schema({
    id: String,
    city: String,
    country: String,
    capital: String,
    lat: Number,
    long: Number,
    lastModifiedDate: String
});

cityShema.pre('save', function (next) {
    this.lastModifiedDate = new Date();
    next();
});

export const City = mongoose.model('City', cityShema);
