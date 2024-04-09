// controllers/estadoController.js
const cEDO_Estado = require('../models/cEDO_Estado');

async function getAllEstado(req, res, next) {
  try {
    const estados = await cEDO_Estado.findAll();
    res.json(estados);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllEstado,
};
