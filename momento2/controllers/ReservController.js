const { request, response } = require('express');
const ReservaModelo = require('../models/ReservModel');

async function buscarReserv(peticion = request, respuesta = response)
{
    let data = await ReservaModelo.find();
    respuesta.json({
        mensaje: data
    });
}
async function nuevaReserv(peticion = request, respuesta = response)
{
    let data = peticion.body;
    let reserv = new  ReservaModelo(data);
    
    await reserv.save();

    respuesta.json({
        mensaje: 'Nueva reserva guardada',
        datos: reserv,
    });
}
async function editarReserva(peticion = request, respuesta = response)
{
    let id = peticion.params.id;
    let data = peticion.body;
    
    await ReservaModelo.findByIdAndUpdate(id, data);

    respuesta.json({
        mensaje: 'La reserva fue actualizada',
        data: data,
    });
}
async function eliminarReserv(peticion = request, respuesta = response)
{
    let id = peticion.params.id;
    
    await ReservaModelo.findByIdAndDelete(id);

    respuesta.json({
        mensaje: 'La reserva fue eliminada',
    });

}
async function buscarReservaID(peticion = request, respuesta = response)
{
    let id = peticion.params.id;
    let data = await ReservaModelo.findById(id);

    respuesta.json({
        mensaje: data,
    });
}




module.exports={eliminarReserv, editarReserva, nuevaReserv, buscarReserv, buscarReservaID }
