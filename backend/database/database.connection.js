import mongoose from 'mongoose'

const ConnectDatabase = async () => {
    try {
        await mongoose.connect('mongodb+srv://mandardeshmukh2003:KVRJILBmacTX8ED1@cluster0.8fpsj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('MongoDB Connected');
    } catch (error) {
        console.log('MongoDB connection error:', error);
    }
}

export default ConnectDatabase;