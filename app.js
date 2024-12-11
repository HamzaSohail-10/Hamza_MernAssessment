import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRoute from './routes/users.js';
import taskRoute from './routes/tasks.js';

// For Loading the Environment Variables
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

// API Routes
app.use('/api/user', userRoute);
app.use('/api/tasks', taskRoute);

// Checking Error
app.use((err, req, res, next) => {
    res.status(500).json({ error: 'Something went wrong. kindly Check!' });
});

export default app;
