const jwt = require('jsonwebtoken');
require('dotenv').config();

const checkValidJWT = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) return res.status(401).json({
        message: "Không có token"
    });

    try {
        const dataDecode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = dataDecode;
        next();
    } catch (err) {
        console.log(err);
        res.status(401).json({
            data: null,
            message: "Token không hợp lệ hoặc hết hạn!"
        })
    }
}

// Hàm dành cho lấy shorted URL người chưa đăng nhập và khởi tạo req.user
const checkOptionalJWT = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return next();

    try {
        const dataDecode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = dataDecode;
        next();
    } catch (err) {
        next();
    }
}
module.exports = { checkValidJWT, checkOptionalJWT };