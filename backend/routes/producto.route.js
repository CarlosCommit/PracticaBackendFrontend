//controlador a cargo
const productoCtrl = require('./../controllers/producto.controller');
//manejador de routes
const express = require('express');
const router = express.Router();

//rutas para la gestion de producto
router.post('/', productoCtrl.createProducto);
router.get('/', productoCtrl.getAllProducts);
router.get('/destacados', productoCtrl.getAllProductsDestacados);
router.delete('/:id', productoCtrl.deleteProducto);
router.put('/', productoCtrl.editProducto);
module.exports = router;
