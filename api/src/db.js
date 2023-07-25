require('dotenv').config();
const { Sequelize } = require('sequelize');
//const fs = require('fs');
//const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST
} = process.env;
const BreedModel = require('./models/Breed')
const TemperModel = require('./models/Temper')

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogs`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

/*const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));


// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);
*/

BreedModel(sequelize)
TemperModel(sequelize)
// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Breed, Temper, dog_temperament } = sequelize.models;


// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Breed.belongsToMany(Temper, {through: "dog_temperament"})
Temper.belongsToMany(Breed, {through: "dog_temperament"})

module.exports = {
  Breed,
  Temper,
  dog_temperament,
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
