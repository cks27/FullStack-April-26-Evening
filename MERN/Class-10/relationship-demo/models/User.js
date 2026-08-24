const mongoose = require('mongoose');

const addressesSchema = new mongoose.Schema({
    area: String,
    city: String,
    state: String,
    country: String
}, { _id: false })

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    addresses: [addressesSchema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;