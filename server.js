import mongoose from 'mongoose';
import app from './app.js';

const PORT = process.env.PORT || 3000;
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}, Connected to DB`));
    })
    .catch(err => console.error('There is an Error Connecting to MongoDB...', err));
