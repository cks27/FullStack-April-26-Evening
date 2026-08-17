const express = require('express');
const ApiResponse = require('./core/ApiResponse');
const { BadRequestError, NotFoundError, ApiError } = require('./core/ApiError');
const mongoose = require('mongoose');
const app = express();
const Product = require('./models/Product');

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/products-db')
    .then(() => console.log('Connection open!'))
    .catch((err) => console.log(err));

// Gist doc - https://docs.github.com/en/rest/gists/gists?apiVersion=2026-03-10

// Get All the products
app.get('/products', async(req, res) => {
    const products = await Product.find({});
    res.json(ApiResponse.build('success', 'all products', products));
});

// Create a Product
app.post('/products', async(req, res) => {
    const { title, price, description } = req.body;
    // create a new product
    if (!title) {
        throw new BadRequestError('Title cannot be empty');
    }

    if (!price) {
        throw new BadRequestError('Price cannot be empty');
    }

    const newProduct = await Product.create({ title, price, description });
    res.status(201).json(ApiResponse.build('success', "Product created successfully", newProduct));
});

// Get a single product
app.get('/products/:id', async(req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        throw new NotFoundError('Product with this id do not exist!');
    }
    res.json(ApiResponse.build('success', 'Single Product', product));
});

// Update a product - Homework
app.patch('/products/:id', async(req, res) => {
    const { title, price, description } = req.body;
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, { title, price, description }, {new: true});
    res.json(ApiResponse.build('success', 'Product updated successfully', product));
});

// Delete a product
app.delete('/products/:id', async(req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json(ApiResponse.build('success', 'deleted the product successfully', null));
});

// custom error handler
app.use((err, req, res, next) => {
    if (err instanceof ApiError) {
        const { message = 'Something went wrong', status = 500 } = err;
        return res.status(status).json(ApiResponse.build('failed', message, null));
    }
    // You can place some alerting mechanism here
    // alertClient.sentAlert({err: err})
    console.log(err);
    return res.status(500).json(ApiResponse.build('failed', 'Best minds working on it!', null));
});

app.listen(3000, () => {
    console.log('server started at port 3000');
});


