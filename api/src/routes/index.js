const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getBreeds = require('../controllers/getBreeds')
const getBreedById = require('../controllers/getBreedById')
const getBreedByName = require('../controllers/getBreedByName')
const getTempers = require('../controllers/getTempers')

//GET BREEDS
router.get('/', getBreeds)

//GET BREED BY ID
router.get('/:idRaza', getBreedById)

//GET BREED BY NAME
router.get('/dogs/name', getBreedByName)

//GET TEMPERS
router.get('/tempers/all', getTempers)

module.exports = {router};
