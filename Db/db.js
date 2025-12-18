// we will handle connectivity between express and mongodb //const mongoose =require('mongoose')......for commonjs 
import mongoose from 'mongoose'
import dotenv from "dotenv";
dotenv.config();
const connectDb = () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("db has been connected");
    }
    catch (err) {
        console.error(err)
    }
}
export default connectDb