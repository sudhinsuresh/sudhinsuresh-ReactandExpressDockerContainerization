import express from 'express'
import Product from '../models/productModel.js';
import Data from '../Data.js'
import User from '../models/userModel.js';
const seedRouter = express.Router();

seedRouter.get('/', async (req,res) =>{
    await Product.deleteMany({})
    const createdProducts =await Product.insertMany(Data.products);
    await User.deleteMany({});
    const createdUsers =await User.insertMany(Data.users)
    res.send({ createdProducts,createdUsers });
})
// seedRouter.get('/', async (req, res) => {
//     try {
//       // Clear existing products
//       await Product.deleteMany({});
  
//       // Insert new products
//       const createdProducts = await Product.insertMany(Data.products);
  
//       res.send({ message: 'Seed data imported successfully', createdProducts });
//     } catch (error) {
//       res.status(500).send({ error: 'Failed to import seed data', details: error.message });
//     }
//   });
  


  
  
  
  
export default seedRouter
