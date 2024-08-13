import express from "express";
import Data from "./Data.js";
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import seedRouter from "./routes/seedaRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
// dotenv.config();
// mongoose.connect(process.env.MONGODB_URL).then(() =>{
//     console.log('connected to db ')
// }).catch(err =>{
//     console.log(err.message)
// })
mongoose.connect('mongodb+srv://sudhinsuresh9526:lDwChMl1dv1LlCZu@cluster0.aaf6b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});




const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended:true }));

app.use('/api/seed', seedRouter)
app.use('/api/products',productRouter)
app.use('/api/users',userRouter)
app.use('/api/orders',orderRouter)
// app.get('/api/products/',(req,res) =>{
//     res.send(Data.products)
// })

// app.get('/api/products/slug/:slug',(req, res)=>{
//     const product=Data.products.find((x) => x.slug === req.params.slug);
//     if(product){
//         res.send(product)
//     }else{
//         res.status(404).send({message:'Product Not Found'})
//     }
//     res.send(Data.products)
// })

// app.get('/api/products/:id',(req, res)=>{
//     const product=Data.products.find((x) => x._id === req.params.id);
//     if(product){
//         res.send(product)
//     }else{
//         res.status(404).send({message:'Product Not Found'})
//     }
//     res.send(Data.products)
// })


app.use((err, req ,res, next) =>{
  res.status(500).send({message:err.message})
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



