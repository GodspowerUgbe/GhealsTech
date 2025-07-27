const mongoose = require('mongoose');
const invItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    desc: {
        type:String
    },
    qty: {
        type: Number,
        required:true
    },
    unitPrice: {
        type: String,
        required:true
    },
    total: {
        type: Number,
        required:true
    }
});

const invoiceItem = mongoose.model('InvoiceItem', invItemSchema);

module.exports = invoiceItem;