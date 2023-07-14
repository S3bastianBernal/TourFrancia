const express = require("express");
const cors = require("cors");
const ciclistasRoutes = require('../routes/ciclista.routes.js');
const equiposRoutes = require('../routes/equipo.routes.js');
const etapasRoutes = require('../routes/etapa.routes.js');
const premiosRoutes = require('../routes/premio.routes.js');
const conectarDB = require('../config/config.js');
const { model } = require("mongoose");

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.ciclistasPath = '/api/ciclistas';
        this.equiposPath = '/api/equipos';
        this.etapasPath = '/api/etapas';
        this.premiosPath = '/api/premios';
        this.conectar();
        this.middlewars();
        this.routes();
    }

    async conectar(){
        await conectarDB();
    }

    middlewars(){
        this.app.use(cors());
        this.app.use(express.static('public'));
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.ciclistasPath, ciclistasRoutes);
        this.app.use(this.equiposPath, equiposRoutes);
        this.app.use(this.etapasPath, etapasRoutes);
        this.app.use(this.premiosPath, premiosRoutes);
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`SERVER RUNNING ON PORT ${this.port}`);
        });
    }
}

module.exports = Server;