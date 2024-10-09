const mongoose = require('mongoose');
require('dotenv').config();

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        const uri=process.env.MONGO_URI;
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
