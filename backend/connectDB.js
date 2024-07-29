
import mongoose from 'mongoose';

export default async function ConnectDB() {
    try {
        const response = await mongoose.connect('mongodb://localhost:27017/tourismDB', { useNewUrlParser: true, useUnifiedTopology: true })
        
        if (response) {
            console.log('MongoDB connected')
        }
        else {
            throw ('Error connecting to MongoDB')
        }
    } catch (error) {
        console.log(error);
    }


}