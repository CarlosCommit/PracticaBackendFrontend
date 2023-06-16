//controlador a cargo
const espectadorCtrl = require('./../controllers/espectador.controller');
//manejador de routes
const express = require('express');
const router = express.Router();

//rutas para la gestion de producto
router.post('/', espectadorCtrl.createEspectador);
router.get('/', espectadorCtrl.getAllEspectadores);
router.get('/:dni', espectadorCtrl.getEspectador);
module.exports = router;
