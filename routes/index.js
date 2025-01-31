const express = require('express');
const productsRouter = require('./products.router');
const proveedorRouter = require('./proveedor.router');

const usersRouter = require('./users.router');
// const categoriesRouter = require('./categories.router'); 

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/proveedor', proveedorRouter);
  router.use('/users', usersRouter);
  // app.use('/categories', categoriesRouter); 
}
module.exports = routerApi;
