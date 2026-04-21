const jwt = require('jsonwebtoken');
const account = require('../models/account.model');
const { comparePassword } = require('../utils/password');
require('dotenv').config();

const generateAccessToken = (user) => {
    const payload = {
        id: user._id,
        email: user.email,
        name: user.name
    }
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await account.findOne({ email });

        if (!user) return res.status(404).json({
            data: null,
            message: "Tài khoản hoặc mật khẩu không hợp lệ!"
        });

        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) res.status(404).json({
            data: null,
            message: "Tài khoản hoặc mật khẩu không hợp lệ!"
        });

        const access_token = generateAccessToken(user);

        res.status(200).json({
            data: access_token,
            message: "Đăng nhập thành công"
        })
    } catch (err) {
        res.status(401).json({
            data: null,
            message: "Đăng nhập thất bại, mã lỗi: " + err
        });
    }
}

module.exports = login;