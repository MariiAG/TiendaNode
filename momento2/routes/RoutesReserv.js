const {Router} = require('express');
const {check}=require('express-validator')
const {validarPeticiones} = require('../validations/Validaciones');

const {buscarReserv} = require('../controllers/ReservController');
const {nuevaReserv} = require('../controllers/ReservController');
const {editarReserva} = require('../controllers/ReservController');
const {eliminarReserv} = require('../controllers/ReservController');
const {buscarReservaID} = require('../controllers/ReservController');

let validaciones =Array(
    check('nombClient', 'Debe llenar este campo').not().isEmpty(),
    check('apellClient', 'Debe llenar este campo').not().isEmpty(),
    check('telef', 'Debe llenar este campo').not().isEmpty(),
    check('cantidad', 'Debe llenar este campo').not().isEmpty(),
    check('fechaIngreso', 'Debe llenar este campo').not().isEmpty(),
    check('fechaSalida', 'Debe llenar este campo').not().isEmpty(),
    check('paquete', 'Debe llenar este campo').not().isEmpty(),
    validarPeticiones
);


const routes = Router();

routes.get('/verReservas', buscarReserv);
routes.get('/buscarReservaID/:id', buscarReservaID);
routes.post('/crearReserva', validaciones, nuevaReserv);
routes.delete('/eliminarReserv/:id', eliminarReserv);
routes.put('/editarReserva/:id', editarReserva);


module.exports= routes; 