import mongoose from 'mongoose';
import dotenv from 'dotenv';
import products from '../utils/sampleData.js';
import Product from '../models/productModel.js';

// Load env variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
  process.exit(1);
});

// Import data
const importData = async () => {
  try {
    // Clear existing products
    await Product.deleteMany();
    console.log('Products cleared');

    // Insert sample products
    await Product.insertMany(products);
    console.log('Products imported successfully');

    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Run the import
importData();