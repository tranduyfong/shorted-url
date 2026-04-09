const UrlModel = require("../models/url.model");
const { hashAndEncode } = require("../utils/hash.url");

const encodeUrlController = async (req, res) => {
    const { link } = req.body;
    const result = hashAndEncode(link);
    await UrlModel.create({
        urlBefore: link,
        urlAfter: result
    });
    res.status(200).json({
        message: "Thêm link thành công",
        data: 'http://localhost:3000/' + result
    });
}

const getUrlController = async (req, res) => {
    const { id } = req.params;
    const result = await UrlModel.findOne({ urlAfter: id });
    if (!result) {
        return res.status(404).json({ message: "Không tìm thấy link" });
    }
    return res.redirect(result.urlBefore);
};

module.exports = { encodeUrlController, getUrlController }