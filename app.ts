/**
 * Created by kenny on 30/03/2017.
 */
import express = require('express');
import res = require("~express/lib/response");
// import mongoose = require('mongoose');
// import db = require('./config/db');
// import DataSQL = require ('./models/DataSQL/DataSQL');
import wsRoutes from './routes/wsRoutes';
import homeRoutes from './routes/homeRoutes';
import config from './config/Config';
import ws from './controllers/ws/ws';

// import ws = require ('./controllers/ws');
// import ws from './controllers/ws';
// import JSONUtils = require("./utils/JSONUtils");
// import KeyTarjeta = require("./models/KeyTarjeta/KeyTarjeta");
// import {TIPO} from "./models/KeyTarjeta/KeyTarjetaDocumentModel";


// db.connect(config.db);  // se conecta con mongodb
// ws.getInstance();  // inicia servicio websocket

let app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

app.use('/', homeRoutes);
app.use('/api/ws', wsRoutes);
ws.getInstance();  // inicia servicio websocket

app.listen(8080, function (error) {
    if(error)
    {
        console.log('error al iniciar el servidor ', + error)
        return;
    }
    console.log('servidor iniciado en ' + config.host + ':' + config.puerto);
});