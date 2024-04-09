// models/cEDO_Estado.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection.js');

const cEDO_Estado = sequelize.define('cEDO_Estado', {
  PK_cEDO_Estado_ClaveEntidad01: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false
  },
  cEDO_NombreEntidad: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'cEDO_Estado',
  timestamps: false
});

module.exports = cEDO_Estado;
