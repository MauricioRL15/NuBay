// controllers/usoCFDIController.js
const cUCFDI_UsoCFDI = require('../models/cUCFDI_UsoCFDI');

async function getAllUsoCFDI(req, res, next) {
  try {
    const usosCFDI = await cUCFDI_UsoCFDI.findAll();
    res.json(usosCFDI);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllUsoCFDI,
};
