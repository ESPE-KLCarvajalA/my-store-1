const { Pool } = require('pg');
const { config } = require('./../config/config');
const USER = encodeURIComponent(config.dbUser);
const PASS = encodeURIComponent(config.dbPass);
const URI = `postgres://${USER}:${PASS}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const pool = new Pool({
  connectionString: URI,
});

<<<<<<< HEAD
module.exports = pool;
=======
module.exports = pool;
>>>>>>> e9876bf46bd904afb7bd0e5edff48bdfd4304a1e
