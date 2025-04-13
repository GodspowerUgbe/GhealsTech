const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    desc: {
        type:String
    },
    clientId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref:'Client'
    },
    status: {
        type: String,
        required: true,
        enum:['active','inactive','completed']
    }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;