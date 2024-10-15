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
    const { fullName, email, password ,isSeller } = req.body;

    try {
        const newUser = new User({ fullName, email, password ,isSeller}); // Store password in plaintext
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// User login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // Check if the password matches
        if (user.password !== password) { // Compare plaintext password
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // If the login is successful, you might want to return a success message or token
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
