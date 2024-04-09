// index.js
const express = require('express');
const usoCFDIRoute = require('./routes/usoCFDIRoute');
const cRF_RegimenFiscalRoute = require('./routes/regimenFiscalRoutes');
const estadoRoute = require('./routes/estadoRoute');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir acceso desde cualquier origen
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Métodos HTTP permitidos
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Encabezados permitidos
    next();
});

// Rutas
app.use('/', usoCFDIRoute);
app.use('/', cRF_RegimenFiscalRoute);
app.use('/', estadoRoute);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
