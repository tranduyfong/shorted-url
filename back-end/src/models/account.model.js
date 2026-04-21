const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    links: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UrlModel"
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model("Account", AccountSchema);