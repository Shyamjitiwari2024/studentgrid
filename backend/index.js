import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import studentRoutes from './routes/students.js';
import seedStudents from './seed.js'

const app = express();
connectDB();
seedStudents();

app.use(cors());
app.use(express.json());
app.use('/api/students',studentRoutes);

const port = process.env.port || 5000;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
});