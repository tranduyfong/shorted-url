const Account = require("../models/account.model");
const UrlModel = require("../models/url.model");
const { hashAndEncode } = require("../utils/hash.url");
const deployUrl = 'http://localhost:3000/'

const encodeUrlController = async (req, res) => {
    try {
        const { link } = req.body;
        if (!link) return res.status(400).json({ message: "Vui lòng cung cấp link" });

        // Khởi tạo biến lưu trữ địa chỉ
        let urlId;
        let resultUrlAfter;

        // Check exist
        let existingUrl = await UrlModel.findOne({ urlBefore: link });

        if (existingUrl) {
            urlId = existingUrl._id;
            resultUrlAfter = existingUrl.urlAfter;
        } else {
            const result = hashAndEncode(link);
            const newUrl = await UrlModel.create({
                urlBefore: link,
                urlAfter: result
            });
            urlId = newUrl._id;
            resultUrlAfter = newUrl.urlAfter;
        }

        if (req.user && req.user.id) {
            await Account.findByIdAndUpdate(
                req.user.id,
                { $addToSet: { links: urlId } }
            );
        }

        res.status(201).json({
            message: existingUrl ? "Link đã tồn tại" : "Thêm link thành công",
            data: deployUrl + resultUrlAfter
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