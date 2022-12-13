const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    orderId: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Order', OrderSchema);