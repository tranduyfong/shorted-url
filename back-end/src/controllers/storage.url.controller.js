const UrlModel = require("../models/url.model");
const Account = require('../models/account.model');

const storagerUrlController = async (req, res) => {
    try {
        const userId = req.user.id;

        // Tìm tài khoản của user đăng nhập
        const userAccount = await Account.findById(userId).populate({
            path: 'links',
            options: { sort: { createdAt: -1 } }
        });

        if (!userAccount) {
            return res.status(404).json({ message: "Không tìm thấy tài khoản" });
        }

        res.status(200).json(userAccount.links);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Lỗi server" });
    }
}

module.exports = storagerUrlController;