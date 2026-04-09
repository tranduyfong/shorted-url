const mongoose = require('mongoose');

const URLSchema = mongoose.Schema({
    urlBefore: String,
    urlAfter: String
}, { timestamps: true });

module.exports = mongoose.model('UrlModel', URLSchema);