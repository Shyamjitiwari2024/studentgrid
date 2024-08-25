import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/studentdb', {
            useNewUrlParser: true,
            // useUnifiedTopolody: true
        });
        console.log('Mongo DB connected!')
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}

export default connectDB;