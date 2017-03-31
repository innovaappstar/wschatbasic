"use strict";
/**
 * Created by kenny on 30/03/2017.
 */
var express = require('express');
// import mongoose = require('mongoose');
// import db = require('./config/db');
// import DataSQL = require ('./models/DataSQL/DataSQL');
var wsRoutes_1 = require('./routes/wsRoutes');
var homeRoutes_1 = require('./routes/homeRoutes');
var Config_1 = require('./config/Config');
var ws_1 = require('./controllers/ws/ws');
// import ws = require ('./controllers/ws');
// import ws from './controllers/ws';
// import JSONUtils = require("./utils/JSONUtils");
// import KeyTarjeta = require("./models/KeyTarjeta/KeyTarjeta");
// import {TIPO} from "./models/KeyTarjeta/KeyTarjetaDocumentModel";
// db.connect(config.db);  // se conecta con mongodb
// ws.getInstance();  // inicia servicio websocket
var app = express();
// set the view engine to ejs
app.set('view engine', 'ejs');
// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));
app.use('/', homeRoutes_1.default);
app.use('/api/ws', wsRoutes_1.default);
ws_1.default.getInstance(); // inicia servicio websocket
app.listen(8080, function (error) {
    if (error) {
        console.log('error al iniciar el servidor ', +error);
        return;
    }
    console.log('servidor iniciado en ' + Config_1.default.host + ':' + Config_1.default.puerto);
});
//# sourceMappingURL=app.js.map