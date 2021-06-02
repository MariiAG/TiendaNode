const express = require('express');
const cors = require('cors');
const rutas = require('../routes/RoutesReserv');
const {conectarBD} = require('../database/conexion')



class servidorModel{

    constructor(){
        this.app = express();
        this.despertarBaseDatos();
        this.crearMiddlewares();
        this.llamarRutasAPI();
    }

    crearMiddlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
    }
    despertarServidor(){
        this.app.listen(process.env.PORT);
    }
    llamarRutasAPI(){
        this.app.use('/', rutas);
    }
    despertarBaseDatos()
    {
        conectarBD();
    }
}
module.exports=servidorModel;