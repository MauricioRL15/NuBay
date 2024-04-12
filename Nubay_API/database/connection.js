// databaseConfig.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dDBFacturas', 'sa', '011015', {             //despues de la coma se agrega la contraseña del usuario
  host: '127.0.0.1',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: false,
      trustServerCertificate: true,
    },
  },
});

module.exports = sequelize;
