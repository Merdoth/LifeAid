import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
    email: {
        required: true,
        type: String,
        unique: true,
    },
    firstName: {
        required: true,
        type: String,
    },
    lastName: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    phoneNumber: {
        required: true,
        type: Number,
        unique: true,
    },

});

module.exports = mongoose.model('Users', usersSchema);
