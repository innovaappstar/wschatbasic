"use strict";
/**
 * Created by innovaapps on 14/03/2017.
 */
var WebSocketServer = require('ws');
var Config_1 = require('../../config/Config');
var WebSocket = require("ws");
exports.WebSocket = WebSocket;
// const express = require('express');
// const app = express();
var BaseWebSocket = (function () {
    function BaseWebSocket() {
        var _this = this;
        //http://stackoverflow.com/questions/22429744/how-to-setup-route-for-websocket-server-in-express
        this.ws = new WebSocketServer.Server({
            verifyClient: function (info, done) {
                // var url  = info.req.url;
                // if (URLUtils.VerificarInteger(url, Header.codDispositivo) &&
                //     URLUtils.VerificarInteger(url, Header.codTipoDispositivo) &&
                //     URLUtils.VerificarInteger(url, Header.codEmpresa) &&
                //     URLUtils.VerificarString(url, Header.imei))
                //    done(true);
                // else
                //    done(false);
                done(true);
            }, port: Config_1.default.puertows, path: '/ws' });
        this.ws.on('connection', function (client) {
            _this.onOpen(client);
            client.on('message', function (data) {
                if (typeof data === 'string')
                    _this.onTextMessage(data, client);
                else if (typeof data === 'binary')
                    _this.onBinaryMessage(data, client);
                // else if (data === ArrayBuffer)//(Buffer.isBuffer(data))  //if (message.type === 'binary')
                //    this.onBinaryMessage(data);
            });
            client.on('close', function (code, reason) {
                _this.onClose(code, reason, client);
            });
        });
    }
    /**
     * envía data para clientes que coincidan con los códigos...
     * codTipoDispositivo es alternativo..
     * @param data string
     * @param codDispositivo number
     * @param codEmpresa number
     * @param codTipoDispositivo ?number
     */
    BaseWebSocket.prototype.sendTextMessageByCodigos = function (data, codDispositivo, codEmpresa, codTipoDispositivo) {
        var _this = this;
        //    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
        this.ws.clients.forEach(function (cliente, index, listClientes) {
            if (cliente[Header.codDispositivo] == codDispositivo && cliente[Header.codEmpresa] == codEmpresa) {
                if ((codTipoDispositivo != null) && cliente[Header.codTipoDispositivo] == codTipoDispositivo)
                    _this.sendTextMessage(data, cliente);
                else
                    _this.sendTextMessage(data, cliente);
            }
        });
    };
    /**
     * envía data para clientes que coincidan con los códigos...
     * codTipoDispositivo es alternativo..
     * @param data string
     * @param codDispositivo number
     * @param codEmpresa number
     * @param codTipoDispositivo ?number
     */
    BaseWebSocket.prototype.sendTextMessageByCliente = function (data, cliente) {
        var _this = this;
        this.ws.clients.forEach(function (clienteList, index, listClientes) {
            if (clienteList[Header.codDispositivo] == cliente[Header.codDispositivo] &&
                clienteList[Header.codEmpresa] == cliente[Header.codEmpresa] &&
                clienteList[Header.codTipoDispositivo] == cliente[Header.codTipoDispositivo]) {
                _this.sendTextMessage(data, cliente);
            }
        });
    };
    /**
     * comprueba si cliente esta conectado y le envía una cadena..
     * @param data string
     * @param cliente WebSocket
     */
    BaseWebSocket.prototype.sendTextMessage = function (data, cliente) {
        if (cliente.readyState === WebSocket.OPEN)
            cliente.send(data);
    };
    return BaseWebSocket;
}());
exports.BaseWebSocket = BaseWebSocket;
var Header = (function () {
    function Header() {
    }
    Header.codDispositivo = 'codDispositivo';
    Header.codEmpresa = 'codEmpresa';
    Header.codTipoDispositivo = 'codTipoDispositivo';
    Header.imei = 'imei';
    return Header;
}());
exports.Header = Header;
//# sourceMappingURL=BaseWebSocket.js.map