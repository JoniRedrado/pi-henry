const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getBreeds = require('../controllers/getBreeds')

router.get('/', getBreeds)

module.exports = {router};
