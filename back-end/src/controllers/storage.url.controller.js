const UrlModel = require("../models/url.model");

const storagerUrlController = async (req, res) => {
    try {
        let result = await UrlModel.find({}).sort({ createdAt: -1 });
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Lỗi server" });
    }
}

module.exports = storagerUrlController;