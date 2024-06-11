import mongoose, { model } from "mongoose";


const conectDB = async () => {
    return mongoose.connect('mongodb://0.0.0.0:27017/entry')
}


export default conectDB;