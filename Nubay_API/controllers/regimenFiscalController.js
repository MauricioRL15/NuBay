const cRF_RegimenFiscal = require('../models/cRF_RegimenFiscal');

async function getAllRegimenFiscal(req, res, next) {
  try {
    const regimenFiscal = await cRF_RegimenFiscal.findAll();
    res.json(regimenFiscal);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllRegimenFiscal
};
