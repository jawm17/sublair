const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    images : {
        type : Array,
        required : true
    },
    thumbnail: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Item', ItemSchema);