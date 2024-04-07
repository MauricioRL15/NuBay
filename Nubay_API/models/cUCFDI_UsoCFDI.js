// models/cUCFDI_UsoCFDI.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection.js');

const cUCFDI_UsoCFDI = sequelize.define('cUCFDI_UsoCFDI', {
  PK_cUCFDI_UsoCFDI_Id01: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false 
  },
  cUCFDI_Clave: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  cUCFDI_Descripcion: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  cUCFDI_AplicaFisica: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  cUCFDI_AplicaMoral: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  cUCFDI_FechaInicioVigencia: {
    type: DataTypes.DATE,
    allowNull: false
  },
  cUCFDI_FechaFinVigencia: {
    type: DataTypes.DATE,
    allowNull: false
  },
  cUCFDI_RegimenFiscalReceptor: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  tableName: 'cUCFDI_UsoCFDI',
  timestamps: false 
});

module.exports = cUCFDI_UsoCFDI;
