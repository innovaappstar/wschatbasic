"use strict";
/**
 * Created by innovaapps on 20/03/2017.
 */
var SesionObserver = (function () {
    // private webSocketServidor : WebSocketServidor = null;
    // private websocketInstancia : ws = null;
    function SesionObserver() {
    }
    SesionObserver.prototype.update = function (dataWs, cliente) {
        if (dataWs.isTipoSesion()) {
            console.log('indice : ' + dataWs.indiceWs + '\n' +
                'subIndice : ' + dataWs.subIndiceWs + '\n' +
                'codigoDatagrama : ' + dataWs.codigoData + '\n' +
                'data : ' + dataWs.data + '\n');
            if (dataWs.isInicioSesion()) {
                this.registrarSesion(dataWs, cliente);
            }
            else if (dataWs.isCierreSesion()) {
                this.actualizarCierreSesion(dataWs);
            }
        }
    };
    SesionObserver.prototype.registrarSesion = function (dataWs, cliente) {
    };
    SesionObserver.prototype.actualizarCierreSesion = function (dataWs) {
    };
    return SesionObserver;
}());
module.exports = SesionObserver;
//# sourceMappingURL=SesionObserver.js.map