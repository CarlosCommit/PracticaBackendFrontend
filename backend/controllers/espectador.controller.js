const Espectador = require('../models/espectador');
const espectadorCtrl = {};


//CREATE
espectadorCtrl.createEspectador = async (request, response) => {
    var espectador = new Espectador(request.body);
    try {
        await espectador.save();
        response.json(
            {
                'status': '1',
                'msg': 'Espectador guardado'
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

espectadorCtrl.getAllEspectadores = async (request, response)=>
{
    var espectadores = await Espectador.find();
    response.json(espectadores);
}

espectadorCtrl.getEspectador = async (request, response) => {
    try {
      const espectador = await Espectador.find({ dni: request.params.dni });
      response.json(espectador);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: 'Ocurrió un error al obtener los espectadores' });
    }
  };


module.exports = espectadorCtrl;
