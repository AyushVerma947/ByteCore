const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures that email addresses are unique
    },
    password: {
        type: String,
        required: true,
    },
    isSeller: {
        type : Boolean,
    }
});

// Create a User model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
