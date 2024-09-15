import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db.js';
import { sum } from './src/controllers/UserController.js';
import router from './src/routers/User.js';



dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

console.log(sum(20,30))
app.get('/',(req,res)=>{
  res.send('hello world')
})
app.use('/api/users',router); // Use the user routes

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
