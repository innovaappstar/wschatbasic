import IObserver = require("./IObserver");
import DataWs = require("../entities/DataWs");
import JSONUtils = require("../../utils/JSONUtils");
import WebSocket = require("ws");
// import ws = require("../controllers/ws");
import ws from '../../controllers/ws/ws';
import Utils = require("../../utils/Utils");
import ArrayUtils = require("../../utils/ArrayUtils");
import Constantes = require("../../constantes/Constantes");

/**
 * Created by innovaapps on 20/03/2017.
 */
class SesionObserver implements IObserver
{
    // private webSocketServidor : WebSocketServidor = null;
    // private websocketInstancia : ws = null;

    constructor(){}

    update(dataWs: DataWs, cliente : WebSocket): void {
        if (dataWs.isTipoSesion())
        {
            console.log(
                'indice : ' + dataWs.indiceWs + '\n' +
                'subIndice : ' + dataWs.subIndiceWs + '\n' +
                'codigoDatagrama : ' + dataWs.codigoData + '\n' +
                'data : ' + dataWs.data + '\n');

            if (dataWs.isInicioSesion())
            {
                this.registrarSesion(dataWs, cliente);
            }else if (dataWs.isCierreSesion())
            {
                this.actualizarCierreSesion(dataWs);
            }
        }
    }

    registrarSesion(dataWs : DataWs, cliente : WebSocket) : void
    {
    }

    actualizarCierreSesion(dataWs : DataWs) : void
    {

    }

}
export = SesionObserver;