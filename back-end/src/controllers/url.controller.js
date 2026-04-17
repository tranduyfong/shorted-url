const UrlModel = require("../models/url.model");
const { hashAndEncode } = require("../utils/hash.url");

const encodeUrlController = async (req, res) => {
    try {
        const { link } = req.body;
        if (!link) return res.status(400).json({ message: "Vui lòng cung cấp link" });

        let existingUrl = await UrlModel.findOne({ urlBefore: link });
        if (existingUrl) {
            return res.status(200).json({
                message: "Link đã tồn tại",
                data: 'http://localhost:3000/' + existingUrl.urlAfter
            });
        }

        const result = hashAndEncode(link);
        await UrlModel.create({
            urlBefore: link,
            urlAfter: result
        });

        res.status(201).json({
            message: "Thêm link thành công",
            data: 'https://shorted-url-g5gz.onrender.com/' + result
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Lỗi server" });
    }
}

const getUrlController = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await UrlModel.findOne({ urlAfter: id });

        if (!result) {
            return res.status(404).json({ message: "Không tìm thấy link" });
        }

        return res.redirect(result.urlBefore);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Lỗi server" });
    }
};

module.exports = { encodeUrlController, getUrlController }