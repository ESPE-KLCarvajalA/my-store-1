<<<<<<< HEAD
// const config = {
//     // ...
//     env: process.env.NODE_ENV || 'development',
    
// };

=======
>>>>>>> e9876bf46bd904afb7bd0e5edff48bdfd4304a1e
require('dotenv').config();
const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
  dbName: process.env.DB_NAME,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
};

<<<<<<< HEAD
module.exports = { config };
=======
module.exports = { config };
>>>>>>> e9876bf46bd904afb7bd0e5edff48bdfd4304a1e
