const {model, Schema}= require ('mongoose');
const { string } = require('yargs');

const ReservSchema = Schema({
    nombClient:{
        type:String,
    },
    apellClient:
    {
        type:String,
    },
    telef:{
        type:String,
    },
    cantidad:{
        type:String,
    },
    fechaIngreso:{
        type:String,
    },
    fechaSalida:{
        type:String,
    },
    paquete:{
        type:String,
    }
});
module.exports=model('ReservasCrucero', ReservSchema );