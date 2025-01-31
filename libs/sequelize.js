const { Sequelize } = require('sequelize');
<<<<<<< HEAD
const { config } = require('../config/config');
const USER = encodeURIComponent(config.dbUser);
const PASS = encodeURIComponent(config.dbPass);
const URI = `postgres://${USER}:${PASS}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize( URI,{
dialect: 'postgres',
logging: true,
});

module.exports = sequelize; 
=======
const { config } = require('./../config/config');
const USER = encodeURIComponent(config.dbUser);
const PASS = encodeURIComponent(config.dbPass);
const URI = `postgres://${USER}:${PASS}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});
module.exports = sequelize;
>>>>>>> e9876bf46bd904afb7bd0e5edff48bdfd4304a1e
