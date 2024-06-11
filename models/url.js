import mongoose from "mongoose";


const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },


    longUrl: {
        type: String,
        required: true,
    }

}, { timestamps: true })

const urlModel = mongoose.model('url'  , urlSchema)


export default urlModel;