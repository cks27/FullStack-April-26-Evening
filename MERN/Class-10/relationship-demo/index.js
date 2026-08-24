const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/relationship-db')
    .then(() => console.log('Connection Open!'));


async function addAddress(userId, address) {
    // find the user with userId
    const user = await User.findById(userId);
    user.addresses.push(address);
    await user.save();
    console.log('Address Saved');
}    

async function main() {
    // const user = await User.create({ name: 'Max', email: 'max@gmail.com' });
    // console.log(user);
    addAddress('6a8c6c6362148f50418d2e83', {
        area: 'Dwarka',
        city: 'New Delhi',
        state: 'Delhi',
        country: 'India'
    })
}

main();


