const Producto = require('../models/producto');
const productoCtrl = {};


//CREATE
productoCtrl.createProducto = async (request, response) => {
    var producto = new Producto(request.body);
    try {
        await producto.save();
        response.json(
            {
                'status': '1',
                'msg': 'Producto guardado'
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

productoCtrl.getAllProducts = async (request, response)=>
{
    var productos = await Producto.find();
    response.json(productos);
}

productoCtrl.getAllProductsDestacados = async (request, response) => {
    try {
      const productos = await Producto.find({ destacado: true });
      response.json(productos);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: 'Ocurrió un error al obtener los productos destacados' });
    }
  };

//UPDATE 

productoCtrl.editProducto = async (request, response) => {
    const producto = new Producto(request.body);
    try {
    await Producto.updateOne({_id: request.body._id}, producto);
    response.json({
    'status': '1',
    'msg': 'Agente updated'
    }) 
    } catch (error) {
    response.status(400).json({
    'status': '0',
    'msg': 'Error procesando la operacion'
    }) 
    }
    }


//DELETE  request.query requestparam requestbody

productoCtrl.deleteProducto = async (request, response)=>{
    try {
    await Producto.deleteOne({_id: request.params.id});
    response.json({
    status: '1',
    msg: 'Producto eliminado'
    }) 
    } catch (error) {
    response.status(400).json({
    'status': '0',
    'msg': 'Error procesando la operacion'
    }) 
    }
    }
    



module.exports = productoCtrl;
