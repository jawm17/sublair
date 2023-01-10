const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    amountPayed: {
        type: Number,
        required: true,
    },
    payerName: {
        type: String,
        required: true
    },
    payerEmail: {
        type: String,
        required: true
    },
    payerId: {
        type: String,
        required: true
    },
    orderId: {
        type: String,
        required: true
    },
    // itemId: {
    //     type: String,
    //     required: true 
    // },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Order', OrderSchema);