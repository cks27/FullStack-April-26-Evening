import mongoose from 'mongoose';

const theatreSchema = new mongoose.Schema({
    name: {
        type: String,
        index: true,
        required: true
    },
    address: String,
    contactNo: String,
    user: {
        
    }
})