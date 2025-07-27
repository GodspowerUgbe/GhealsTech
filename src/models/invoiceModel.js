const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    invoiceDate: {
        type: mongoose.SchemaTypes.Date,
        required:true
    },
    clientId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Client",
        required:true
    },
    total: {
        type: String,
        required:true
    },
    projectId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"Project"
    },
    dueDate: {
        type: mongoose.SchemaTypes.Date,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum:['notSent,sent,paid,overDue']
    },
    invoiceItems: [{
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref:"InvoiceItem"
    }]

}, {
    timestamps:true
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;