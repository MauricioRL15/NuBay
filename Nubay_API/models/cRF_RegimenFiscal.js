// models/cRF_RegimenFiscal.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection.js');

const cRF_RegimenFiscal = sequelize.define('cRF_RegimenFiscal', {
  PK_cRF_RegimenFiscal_Id01: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false
  },
  cRF_RegimenFiscal: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cRF_Descripcion: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  cRF_AplicaFisica: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  cRF_AplicaMoral: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  cRF_FechaInicioVigencia: {
    type: DataTypes.DATE,
    allowNull: false
  },
  cRF_FechaFinVigencia: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'cRF_RegimenFiscal',
  timestamps: false
});

module.exports = cRF_RegimenFiscal;
