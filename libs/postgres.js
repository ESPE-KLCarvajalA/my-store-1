const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
<<<<<<< HEAD
    user: "espe",
    password: "espe",
=======
    user: 'espe',
    password: 'espe',
>>>>>>> e9876bf46bd904afb7bd0e5edff48bdfd4304a1e
    database: 'myStore'
  });
  await client.connect();
  return client;
}

<<<<<<< HEAD
module.exports = { getConnection };
=======
module.exports = getConnection;
>>>>>>> e9876bf46bd904afb7bd0e5edff48bdfd4304a1e
