const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        min: 5
    },
    password: {
        type: String,
        required: true,
        trim: true,
    }
});

const User = mongoose.model('user', userSchema);


module.exports = User;