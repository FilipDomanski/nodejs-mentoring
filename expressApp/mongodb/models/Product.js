const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: String,
    name: String,
    quantity: String,
    description: String,
    reviews: String,
    lastModifiedDate: String
});

productSchema.pre('save', function (next) {
    this.lastModifiedDate = new Date();
    next();
});

export const Product = mongoose.model('Product', productSchema);
