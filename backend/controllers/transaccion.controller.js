const Transaccion = require('../models/transaccion');
const transaccionCtrl = {};


//CREATE
transaccionCtrl.createTransaccion = async (request, response) => {
    var transaccion = new Transaccion(request.body);
    try {
        await transaccion.save();
        response.json(
            {
                'status': '1',
                'msg': 'Transaccion guardado'
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

transaccionCtrl.getAllTransacciones = async (request, response)=>
{
    var transacciones = await Transaccion.find();
    response.json(transacciones);
}

transaccionCtrl.getAllProductsEmail = async (request, response) => {
    try {
      const transacciones = await Transaccion.find({ emailCliente: request.params.email });
      response.json(transacciones);
    } catch (error) {
      response.status(500).json({ error: 'Ocurrió un error al obtener las transacciones' });
    }
  };

//TODO GET TRANSACCIONES DE PARAMETROS DE DIVISAS, le debo pasar 2 parametros origen y destino y buscar ese filtro


transaccionCtrl.getTransaccionesOrigenDestino = async (req, res) => {
    try {
      const { origen, destino } = req.query;
      
      const busqueda = {};

      if (origen) {
        busqueda.monedaOrigen = origen;
      }
  
      if (destino) {
        busqueda.monedaDestino = destino;
      }
  
      const transacciones = await Transaccion.find(busqueda);
  
      res.json(transacciones);
    } catch (error) {
      res.status(500).json({
        status: '0',
        msg: 'Ocurrio un error obteniendo las transacciones del origen y destino solicitados.',
        error: error.message
      });
    }
  };
  
module.exports = transaccionCtrl;
