"use strict";
var SolicitudDEO = require("../deo/SolicitudDEO");
/**
 * Created by innovaapps on 20/03/2017.
 */
var SolicitudObserver = (function () {
    function SolicitudObserver() {
    }
    SolicitudObserver.prototype.update = function (dataWs, cliente) {
        if (dataWs.isTipoSolicitud()) {
            if (dataWs.isRecargarMensaje()) {
                this.recargarMensaje(dataWs, cliente);
            }
        }
    };
    SolicitudObserver.prototype.recargarMensaje = function (dataWs, cliente) {
        var dataAuxiliar = new SolicitudDEO().getUltimosMessages(dataWs);
        cliente.send("4|1|1|1|ultimos mensajes|1#" + dataAuxiliar);
    };
    return SolicitudObserver;
}());
exports.SolicitudObserver = SolicitudObserver;
//# sourceMappingURL=SolicitudObserver.js.map