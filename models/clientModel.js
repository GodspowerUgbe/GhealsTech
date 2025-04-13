const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    telNumber: {
        type: String
    },
    projects: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref:'Project'
    }],
    invoices: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref:'Invoice'
    }],
    payments: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref:'Payment'
    }],
    refreshToken: String,
    admin: {
        type: Boolean,
        default:false
    }
});

const Client = mongoose.model('Client', clientSchema);
module.exports = Client;