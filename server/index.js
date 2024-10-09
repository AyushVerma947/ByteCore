const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const User = require('./models/Users');
const cors = require('cors');
require('dotenv').config();


const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse JSON bodies

// Connect to MongoDB
connectDB();

// User registration route
app.post('/signup', async (req, res) => {
    const { fullName, email, password } = req.body;

    try {
        const newUser = new User({ fullName, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
