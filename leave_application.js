const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    time: {
        required: true,
        type: String
    },
    date: {
        required: true,
        type: String
    },
    comment: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('leave-application', dataSchema)