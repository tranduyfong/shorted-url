const express = require('express');
const { encodeUrlController, getUrlController } = require('../controllers/url.controller');
const storagerUrlController = require('../controllers/storage.url.controller');
const login = require('../controllers/auth.controllers');
const createAccount = require('../controllers/account.controllers');
const { checkOptionalJWT, checkValidJWT } = require('../middleware/jwt.middleware');
const router = express.Router();

// Route đăng nhập và đăng ký
router.post('/login', login);
router.post('/register', createAccount);

// Route lấy lịch sử hoạt động
router.get('/history', checkValidJWT, storagerUrlController);

// Route gửi link và lấy link
router.post('/url', checkOptionalJWT, encodeUrlController);
router.get('/:id', getUrlController);

module.exports = router;