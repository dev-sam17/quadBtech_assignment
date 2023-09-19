const express = require('express');
const httpLoadData = require('../controllers/controller');

const router = express.Router();

router.get('/', httpLoadData );

module.exports = router;