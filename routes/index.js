const express = require('express');
const productsRouter = require('./products.router');
<<<<<<< HEAD
const proveedorRouter = require('./proveedor.router');

const usersRouter = require('./users.router');
// const categoriesRouter = require('./categories.router'); 

=======
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');
>>>>>>> e9876bf46bd904afb7bd0e5edff48bdfd4304a1e
function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
<<<<<<< HEAD
  router.use('/proveedor', proveedorRouter);
  router.use('/users', usersRouter);
  // app.use('/categories', categoriesRouter); 
=======
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
>>>>>>> e9876bf46bd904afb7bd0e5edff48bdfd4304a1e
}
module.exports = routerApi;
