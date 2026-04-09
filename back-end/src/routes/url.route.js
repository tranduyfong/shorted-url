const express = require('express');
const { encodeUrlController, getUrlController } = require('../controllers/url.controller');
const router = express.Router();

router.post('/', encodeUrlController);
router.get('/:id', getUrlController);

module.exports = router;