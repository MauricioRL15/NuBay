// routes/usoCFDIRoute.js
const express = require('express');
const router = express.Router();
const usoCFDIController = require('../controllers/usoCFDIController');

router.get('/uso-cfdi', usoCFDIController.getAllUsoCFDI);

module.exports = router;
