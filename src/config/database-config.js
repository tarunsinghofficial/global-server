import mongoose from 'mongoose';
import  {DB_URL} from './server-config.js';
export async function connect() {
    try {
        await mongoose.connect(DB_URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
}