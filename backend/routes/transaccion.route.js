//controlador a cargo
const transaccionCtrl = require('./../controllers/transaccion.controller');
//manejador de routes
const express = require('express');
const router = express.Router();

//rutas para la gestion de producto
router.post('/', transaccionCtrl.createTransaccion);
router.get('/', transaccionCtrl.getAllTransacciones);
router.get('/:email', transaccionCtrl.getAllProductsEmail);
router.get('/origenDestino/filter', transaccionCtrl.getTransaccionesOrigenDestino);
module.exports = router;
