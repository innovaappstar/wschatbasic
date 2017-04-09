"use strict";
/**
 * Created by innovaapps on 14/03/2017.
 */
var WebSocketServer = require('ws');
var Config_1 = require('../../config/Config');
var WebSocket = require("ws");
exports.WebSocket = WebSocket;
var URLUtils_1 = require('../../utils/URLUtils');
var BaseWebSocket = (function () {
    function BaseWebSocket() {
        var _this = this;
        //http://stackoverflow.com/questions/22429744/how-to-setup-route-for-websocket-server-in-express
        this.ws = new WebSocketServer.Server({
            verifyClient: function (info, done) {
                var url = info.req.url;
                if (URLUtils_1.URLUtils.VerificarString(url, Header.codDispositivo) &&
                    URLUtils_1.URLUtils.VerificarString(url, Header.imei))
                    done(true);
                else
                    done(false);
                // done(true);
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
    BaseWebSocket.prototype.sendBroadcast = function (data) {
        var _this = this;
        this.ws.clients.forEach(function (cliente) {
            _this.sendTextMessage(data, cliente);
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
        this.ws.clients.forEach(function (clienteList) {
            if (clienteList[Header.codDispositivo] == cliente[Header.codDispositivo]) {
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
    Header.imei = 'imei';
    return Header;
}());
exports.Header = Header;
//# sourceMappingURL=BaseWebSocket.js.map