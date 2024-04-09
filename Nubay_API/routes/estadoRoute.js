// routes/estadoRoute.js
const express = require('express');
const router = express.Router();
const estadosController = require('../controllers/estadoController');

router.get('/estados', estadosController.getAllEstado);

module.exports = router;
