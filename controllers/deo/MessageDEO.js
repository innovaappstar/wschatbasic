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
var MessageDEO = (function () {
    function MessageDEO() {
    }
    /**
     * obtiene atributos del datagrama entrante
     * @returns {DataWs}
     */
    MessageDEO.prototype.getIDMessage = function (dataWS) {
        var ids = "";
        var listMessage = dataWS.data.split("~");
        listMessage.forEach(function (messageItem) {
            var message = messageItem.split("|");
            var _id = ArrayUtils.VerificarString(message, 0);
            var msg = ArrayUtils.VerificarString(message, 1);
            var nickUser = ArrayUtils.VerificarString(message, 2);
            var fechaHora = ArrayUtils.VerificarString(message, 3);
            ids += _id + "|";
        });
        ids = Utils.removerUltimosCaracteres(ids, 1);
        return ids;
    };
    /**
     * obtiene atributos del datagrama entrante
     * @returns {DataWs}
     */
    MessageDEO.prototype.getNuevoMessage = function (dataWS) {
        var listMessage = dataWS.data.split("~");
        var nuevoMensaje = "";
        listMessage.forEach(function (messageItem) {
            var message = messageItem.split("|");
            var _id = ArrayUtils.VerificarString(message, 0);
            var msg = ArrayUtils.VerificarString(message, 1);
            var nickUser = ArrayUtils.VerificarString(message, 2);
            var fechaHora = ArrayUtils.VerificarString(message, 3);
            var isMensajeRepetido = false;
            var posicion = MessageObserver_1.MessageObserver.listMensajes.length + 1;
            var mensajeCli = {
                indice: posicion,
                msg: msg,
                nickEmisor: nickUser,
                fechaHora: fechaHora,
                _id: _id
            };
            MessageObserver_1.MessageObserver.listMensajes.forEach(function (mensajeCliente) {
                if ((mensajeCliente.nickEmisor == nickUser) && (mensajeCliente.fechaHora == fechaHora)
                    && (mensajeCliente.msg == msg)) {
                    console.log('YA EXISTE ESTE MENSAJE - DUPLICADO');
                    isMensajeRepetido = true;
                    return false;
                }
            });
            if (!isMensajeRepetido) {
                MessageObserver_1.MessageObserver.listMensajes.push(mensajeCli);
                console.log("se registro nuevo mensaje " + MessageObserver_1.MessageObserver.listMensajes.length + " con el id " + mensajeCli.indice);
                // console.log(mensajeCli);
                nuevoMensaje += msg + "|" + nickUser + "|" + fechaHora + "|" + _id + "~";
            }
        });
        nuevoMensaje = Utils.removerUltimosCaracteres(nuevoMensaje, 1);
        return nuevoMensaje;
    };
    return MessageDEO;
}());
module.exports = MessageDEO;
//# sourceMappingURL=MessageDEO.js.map