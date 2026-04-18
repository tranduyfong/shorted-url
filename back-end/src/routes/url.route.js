const express = require('express');
const { encodeUrlController, getUrlController } = require('../controllers/url.controller');
const storagerUrlController = require('../controllers/storage.url.controller');
const router = express.Router();

// Route lấy lịch sử hoạt động
router.get('/history', storagerUrlController);

// Route gửi link và lấy link
router.post('/', encodeUrlController);
router.get('/:id', getUrlController);

module.exports = router;