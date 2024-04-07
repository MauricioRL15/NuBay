const express = require('express');
const router = express.Router();
const cRF_RegimenFiscalController = require('../controllers/regimenFiscalController');

router.get('/regimen-fiscal', cRF_RegimenFiscalController.getAllRegimenFiscal);

module.exports = router;
