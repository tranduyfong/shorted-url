const account = require('../models/account.model');
const { hashPassword } = require('../utils/password');

const createAccount = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const isExist = await account.findOne({ email });

        if (isExist) return res.status(401).json({
            data: null,
            message: "Tài khoản đã tồn tại!"
        });

        const passwordHash = await hashPassword(password);

        const created = await account.create({
            name: name,
            email: email,
            password: passwordHash
        });

        return res.status(200).json({
            data: created,
            message: "Tạo tài khoản thành công!"
        });
    } catch (error) {
        return res.status(401).json({
            data: null,
            message: "Lỗi hệ thống, mã lỗi: " + error
        });
    }
}

module.exports = createAccount;