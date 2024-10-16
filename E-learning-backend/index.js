import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db.js';
import userRoutes from './src/routers/User.route.js';
import quizzRoutes from './src/routers/Quizz.route.js'
// import { insertQuizzes } from './src/modals/Ques.js';





dotenv.config();
connectDB();
// insertQuizzes();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));


app.get('/',(req,res)=>{
  res.send('hello world')
});


app.use('/api/user',userRoutes)
app.use('/api',quizzRoutes)


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
