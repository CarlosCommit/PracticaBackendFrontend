const Ticket = require('../models/ticket');
const ticketCtrl = {};


//CREATE
ticketCtrl.createTicket = async (request, response) => {
    var ticket = new Ticket(request.body);
    try {
        await ticket.save();
        response.json(
            {
                'status': '1',
                'msg': 'Ticket guardado'
            }
        )
    } catch (error) {
        response.status(400).json(
            {
                'status': '0',
                'msg': 'Error procesando operacion.'
            }
        )
    }
}

//READ

ticketCtrl.getAllTickets = async (request, response)=>
{
    var tickets = await Ticket.find().populate("espectador");
    response.json(tickets);
}

ticketCtrl.getAllTicketsByCate = async (request, response) => {
    try {
      const tickets = await Ticket.find({ categoriaEspectador: request.params.categoria }).populate("espectador");
      response.json(tickets);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: 'Ocurrió un error al obtener los tickets' });
    }
  };

  ticketCtrl.getById = async (request, response) => {
    try {
      const ticket = await Ticket.findById(request.params.id).populate('espectador');
       response.json(ticket);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: 'Ocurrió un error al obtener los tickets' });
    }
  };


//UPDATE 

ticketCtrl.editTicket = async (request, response) => {
    const ticket = new Ticket(request.body);
    try {
    await Ticket.updateOne({_id: request.body._id}, ticket);
    response.json({
    'status': '1',
    'msg': 'Ticket updated'
    }) 
    } catch (error) {
    response.status(400).json({
    'status': '0',
    'msg': 'Error procesando la operacion'
    }) 
    }
    }


//DELETE  request.query requestparam requestbody

ticketCtrl.deleteTicket = async (request, response)=>{
    try {
    await Ticket.deleteOne({_id: request.params.id});
    response.json({
    status: '1',
    msg: 'Ticket eliminado'
    }) 
    } catch (error) {
    response.status(400).json({
    'status': '0',
    'msg': 'Error procesando la operacion'
    }) 
    }
    }
    



module.exports = ticketCtrl;
