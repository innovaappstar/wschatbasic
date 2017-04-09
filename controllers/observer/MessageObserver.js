"use strict";
// import ws = require("../controllers/ws");
var ws_1 = require('../../controllers/ws/ws');
var BaseWebSocket_1 = require("../ws/BaseWebSocket");
var MessageDEO = require("../deo/MessageDEO");
/**
 * Created by innovaapps on 20/03/2017.
 */
var MessageObserver = (function () {
    function MessageObserver() {
    }
    MessageObserver.prototype.update = function (dataWs, cliente) {
        if (dataWs.isTipoMessage()) {
            // console.log(
            //     'cliente : ' + cliente[Header.codDispositivo] + '\n' +
            //     // 'indice : ' + dataWs.indiceWs + '\n' +
            //     // 'subIndice : ' + dataWs.subIndiceWs + '\n' +
            //     // 'codigoDatagrama : ' + dataWs.codigoData + '\n' +
            //     'data : ' + dataWs.data + '\n');
            if (dataWs.isRegistroMessage()) {
                this.registrarMessage(dataWs, cliente);
            }
            else if (dataWs.isNuevoMessage()) {
                this.isNuevoMessage(dataWs);
            }
        }
    };
    MessageObserver.prototype.registrarMessage = function (dataWs, cliente) {
        var dataAuxiliar = new MessageDEO().getIDMessage(dataWs);
        var dataBroadcast = new MessageDEO().getNuevoMessage(dataWs);
        cliente.send("3|1|1|1|msg|1#" + dataAuxiliar);
        console.log(cliente[BaseWebSocket_1.Header.codDispositivo] + " => " + dataAuxiliar);
        if (dataBroadcast.length > 0) {
            ws_1.default.getInstance().sendBroadcast("3|2|1|1|msg|1#" + dataBroadcast);
        }
        console.log(dataBroadcast);
    };
    MessageObserver.prototype.isNuevoMessage = function (dataWs) {
    };
    // private webSocketServidor : WebSocketServidor = null;
    // private websocketInstancia : ws = null;
    MessageObserver.listMensajes = []; //= new Array<IMensaje>();
    return MessageObserver;
}());
exports.MessageObserver = MessageObserver;
//# sourceMappingURL=MessageObserver.js.map