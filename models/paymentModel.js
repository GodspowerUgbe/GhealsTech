const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    method: {
        type: String,
        required: true,
        // enum:['credit_card','transfer','paypal']
    },
    date: {
        type: mongoose.SchemaTypes.Date,
        required:true
    },
    amount: {
        type: String,
        required:true
    },
    clientId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref:'Client'
    },
    invoiceId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref:'Invoice'
    },
    status: {
        type: String,
        required: true,
        enum:['pending','failed','paid']
    }
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;