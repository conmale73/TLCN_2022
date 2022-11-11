const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    colors: {
        type: [String],
        require: true,
    },
    designer:{
        type: String,
        require: true,
    },
    slug: {
        type: String,
        require: true,
    },
    size: {
        type: [String],
        require: true,
    }
});