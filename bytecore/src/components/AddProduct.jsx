import React, { useState } from 'react';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [processor, setProcessor] = useState('');
  const [ram, setRam] = useState('');
  const [storage, setStorage] = useState('');
  const [graphicsCard, setGraphicsCard] = useState('');
  const [displaySize, setDisplaySize] = useState('');
  const [operatingSystem, setOperatingSystem] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Get the first file from the input
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form Data to send in POST request
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('image', image); // Ensure image is appended
    formData.append('brand', brand);
    formData.append('model', model);
    formData.append('processor', processor);
    formData.append('ram', ram);
    formData.append('storage', storage);
    formData.append('graphicsCard', graphicsCard);
    formData.append('displaySize', displaySize);
    formData.append('operatingSystem', operatingSystem);

    fetch('http://localhost:5000/add-product', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Success:', data);
        alert('Product added successfully');
      })
      .catch((error) => {
        console.error('Error:', error.message);
        alert('Failed to add product: ' + error.message); // More informative error handling
      });

    // Reset the form
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setPrice('');
    setDescription('');
    setImage(null);
    setBrand('');
    setModel('');
    setProcessor('');
    setRam('');
    setStorage('');
    setGraphicsCard('');
    setDisplaySize('');
    setOperatingSystem('');
  };

  return (
    <div className="container mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-6">Add a New Product</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block text-lg mb-2">Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product name"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-lg mb-2">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product price"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-lg mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product description"
            required
          />
        </div>

        {/* Brand */}
        <div>
          <label className="block text-lg mb-2">Brand</label>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter brand"
            required
          />
        </div>

        {/* Model */}
        <div>
          <label className="block text-lg mb-2">Model</label>
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter model"
            required
          />
        </div>

        {/* Processor */}
        <div>
          <label className="block text-lg mb-2">Processor</label>
          <input
            type="text"
            value={processor}
            onChange={(e) => setProcessor(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter processor type"
            required
          />
        </div>

        {/* RAM */}
        <div>
          <label className="block text-lg mb-2">RAM</label>
          <input
            type="text"
            value={ram}
            onChange={(e) => setRam(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter RAM capacity"
            required
          />
        </div>

        {/* Storage */}
        <div>
          <label className="block text-lg mb-2">Storage</label>
          <input
            type="text"
            value={storage}
            onChange={(e) => setStorage(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter storage capacity"
            required
          />
        </div>

        {/* Graphics Card */}
        <div>
          <label className="block text-lg mb-2">Graphics Card</label>
          <input
            type="text"
            value={graphicsCard}
            onChange={(e) => setGraphicsCard(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter graphics card model"
          />
        </div>

        {/* Display Size */}
        <div>
          <label className="block text-lg mb-2">Display Size</label>
          <input
            type="text"
            value={displaySize}
            onChange={(e) => setDisplaySize(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter display size (inches)"
          />
        </div>

        {/* Operating System */}
        <div>
          <label className="block text-lg mb-2">Operating System</label>
          <input
            type="text"
            value={operatingSystem}
            onChange={(e) => setOperatingSystem(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter operating system"
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-lg mb-2">Product Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
