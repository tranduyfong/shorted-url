const mongoose = require('mongoose');

const URLSchema = mongoose.Schema({
    urlBefore: {
        type: String,
        required: true
    },
    urlAfter: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

module.exports = mongoose.model('UrlModel', URLSchema);