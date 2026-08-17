const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: true
    },
    price: {
        type: Number,
        min: [0, 'Price cannot be less than 0']
    },
    description: {
        type: String,
        maxLength: 500
    }
}, { versionKey: false, timestamps: true });

const Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;