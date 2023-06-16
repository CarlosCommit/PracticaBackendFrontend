//controlador a cargo
const ticketCtrl = require('./../controllers/ticket.controller');
//manejador de routes
const express = require('express');
const router = express.Router();

//rutas para la gestion de producto
router.post('/', ticketCtrl.createTicket);
router.get('/', ticketCtrl.getAllTickets);
router.get('/:categoria', ticketCtrl.getAllTicketsByCate);
router.put('/', ticketCtrl.editTicket);
router.delete('/:id', ticketCtrl.deleteTicket);
router.get('/id/:id', ticketCtrl.getById);
module.exports = router;
