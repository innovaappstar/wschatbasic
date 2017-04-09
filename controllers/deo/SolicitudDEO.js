"use strict";
/**
 * Created by innovaapps on 20/03/2017.
 */
var ArrayUtils = require('../../utils/ArrayUtils');
var Utils = require("../../utils/Utils");
var MessageObserver_1 = require("../observer/MessageObserver");
/**
 * DEO : Objeto deserializador de objetos
 */
var SolicitudDEO = (function () {
    function SolicitudDEO() {
    }
    /**
     * obtiene atributos del datagrama entrante
     * @returns {DataWs}
     */
    SolicitudDEO.prototype.getUltimosMessages = function (dataWS) {
        // let listMessage = dataWS.data.split("~");
        var nuevoMensaje = "";
        var message = dataWS.data.split("|"); //messageItem.split("|");
        var capacidad = ArrayUtils.VerificarInteger(message, 0);
        capacidad = MessageObserver_1.MessageObserver.listMensajes.length - capacidad;
        MessageObserver_1.MessageObserver.listMensajes.forEach(function (mensajeCliente, index) {
            if (index >= capacidad) {
                nuevoMensaje += mensajeCliente.msg + "|" + mensajeCliente.nickEmisor + "|" + mensajeCliente.fechaHora + "|" + mensajeCliente._id + "~";
            }
        });
        nuevoMensaje = Utils.removerUltimosCaracteres(nuevoMensaje, 1);
        return nuevoMensaje;
    };
    return SolicitudDEO;
}());
module.exports = SolicitudDEO;
//# sourceMappingURL=SolicitudDEO.js.map