const servidorModelo = require('./models/ServidorModelo');
require('dotenv').config();

let serv = new servidorModelo();

serv.despertarServidor();