const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const User = require('./models/Users');
const Product = require('./models/Products');
const cors = require('cors');
const multer = require('multer');
const path = require('path'); // Import path to manage file paths
const fs = require('fs'); // Import fs to manage file system
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

// Set up storage for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadsDir); // Set the destination folder
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Set the filename with a timestamp
    }
});

// Initialize multer
const upload = multer({ storage: storage });

// Connect to MongoDB
connectDB();

// User registration route
app.post('/signup', async (req, res) => {
    const { fullName, email, password, isSeller } = req.body;

    try {
        const newUser = new User({ fullName, email, password, isSeller }); // Store password in plaintext
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

        // If the login is successful, return a success message or token
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Add product route with file upload
app.post('/add-product', upload.single('image'), async (req, res) => {
    console.log(req.body)
    const {
        name,
        price,
        description,
        brand,
        model,
        processor,
        ram,
        storage,
        graphicsCard,
        displaySize,
        operatingSystem,
    } = req.body;

    // Access the uploaded file
    const image = req.file ? `/uploads/${req.file.filename}` : ''; // Store relative path

    try {
        const newProduct = new Product({
            name,
            price,
            description,
            image, // Save the image path
            brand,
            model,
            processor,
            ram,
            storage,
            graphicsCard,
            displaySize,
            operatingSystem,
        });

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error('Failed to add product:', error);
        res.status(500).json({ error: 'Failed to add product', message: error.message });
    }
});

// Route: Get all products
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve products', message: error.message });
    }
});
app.get('/products/:id', async (req, res) => {
    const productId = req.params.id;
    // console.log(productId);
    try {
        // Fetch product by ID
        const product = await Product.findById(productId);

        if (product) {
<<<<<<< HEAD
=======
            console.log(product)
>>>>>>> origin/master
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
