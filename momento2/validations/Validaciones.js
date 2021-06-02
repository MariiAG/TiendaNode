const { body, validationResult } = require('express-validator');
const { request, response } = require('express');

function validarPeticiones(peticion = request, respuesta = response, next){
    
    
    let errores = validationResult(peticion);


    if(!errores.isEmpty())
    {
        return (respuesta.status(400).json(errores));
    }
    next();

}
module.exports={validarPeticiones}