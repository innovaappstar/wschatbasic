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

/**
 * Created by innovaapps on 20/03/2017.
 */
class MessageObserver implements IObserver
{
    // private webSocketServidor : WebSocketServidor = null;
    // private websocketInstancia : ws = null;

    public static listMensajes : Array<IMensaje> = []; //= new Array<IMensaje>();

    constructor(){}

    update(dataWs: DataWs, cliente : WebSocket): void {
        if (dataWs.isTipoMessage())
        {
            // console.log(
            //     'cliente : ' + cliente[Header.codDispositivo] + '\n' +
            //     // 'indice : ' + dataWs.indiceWs + '\n' +
            //     // 'subIndice : ' + dataWs.subIndiceWs + '\n' +
            //     // 'codigoDatagrama : ' + dataWs.codigoData + '\n' +
            //     'data : ' + dataWs.data + '\n');

            if (dataWs.isRegistroMessage())
            {
                this.registrarMessage(dataWs, cliente);
            }else if (dataWs.isNuevoMessage())
            {
                this.isNuevoMessage(dataWs);
            }
        }
    }

    registrarMessage(dataWs : DataWs, cliente : WebSocket) : void
    {
        let dataAuxiliar = new MessageDEO().getIDMessage(dataWs);
        let dataBroadcast = new MessageDEO().getNuevoMessage(dataWs);

        cliente.send(`3|1|1|1|msg|1#${dataAuxiliar}`);
        console.log(cliente[Header.codDispositivo] + " => " + dataAuxiliar);
        if(dataBroadcast.length > 0)
        {
            ws.getInstance().sendBroadcast(`3|2|1|1|msg|1#${dataBroadcast}`)
        }
        console.log(dataBroadcast);
    }

    isNuevoMessage(dataWs : DataWs) : void
    {

    }

}

interface IMensaje
{
    indice : number;
    msg : string;
    nickEmisor : string;
    fechaHora : string;
    _id : string;
}

export { MessageObserver, IMensaje};