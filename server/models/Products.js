// models/Product.js

const mongoose = require('mongoose');

// Define the Product Schema for Laptops
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Store image URL or file path
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  processor: {
    type: String,
    required: true,
  },
  ram: {
    type: String,
    required: true, // e.g., "16GB DDR4"
  },
  storage: {
    type: String,
    required: true, // e.g., "512GB SSD"
  },
  graphicsCard: {
    type: String, // Optional field, not all laptops have dedicated graphics
  },
  displaySize: {
    type: String, // e.g., "15.6 inches"
  },
  operatingSystem: {
    type: String, // e.g., "Windows 11"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the Product model
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
