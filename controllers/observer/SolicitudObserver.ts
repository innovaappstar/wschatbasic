import IObserver = require("./IObserver");
import DataWs = require("../entities/DataWs");
import JSONUtils = require("../../utils/JSONUtils");
import WebSocket = require("ws");
// import ws = require("../controllers/ws");
import ws from '../../controllers/ws/ws';
import Utils = require("../../utils/Utils");
import ArrayUtils = require("../../utils/ArrayUtils");
import Constantes = require("../../constantes/Constantes");
import {BaseWebSocket, Header} from "../ws/BaseWebSocket";
import MessageDEO = require("../deo/MessageDEO");
import SolicitudDEO = require("../deo/SolicitudDEO");

/**
 * Created by innovaapps on 20/03/2017.
 */
class SolicitudObserver implements IObserver
{
    constructor(){}

    update(dataWs: DataWs, cliente : WebSocket): void {
        if (dataWs.isTipoSolicitud())
        {
            if (dataWs.isRecargarMensaje())
            {
                this.recargarMensaje(dataWs, cliente);
            }
        }
    }

    recargarMensaje(dataWs : DataWs, cliente : WebSocket) : void
    {
        let dataAuxiliar = new SolicitudDEO().getUltimosMessages(dataWs);
        cliente.send(`4|1|1|1|ultimos mensajes|1#${dataAuxiliar}`);
    }

}

export { SolicitudObserver};