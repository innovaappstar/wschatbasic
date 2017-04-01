"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseWebSocket_1 = require('./BaseWebSocket');
var Dispositivo = require('../entities/Dispositivo');
var Observable = require("../observer/Observable");
var DataWsDEO = require("../deo/DataWsDEO");
var URLUtils_1 = require('../../utils/URLUtils');
/**
 * objeto ws-servidor que se encargará
 * de recepcionar toda la data de los
 * clientes (validadores-configuración-cards-nfc)
 * https://laracasts.com/discuss/channels/elixir/class-is-not-a-constructor
 */
var ws = (function (_super) {
    __extends(ws, _super);
    function ws() {
        _super.call(this);
        this.listDispositivo = new Array();
        console.log('constructor-ws-iniciado');
    }
    ws.getInstance = function () {
        if (!ws.instance) {
            ws.instance = new ws();
            ws.observable.agregarObservadoresPredeterminados();
            console.log('servicio iniciado.. ws singleton');
        }
        return ws.instance;
    };
    ws.prototype.onOpen = function (client) {
        var url = client.upgradeReq.url;
        var codDispositivo = URLUtils_1.URLUtils.VerificarInteger(url, BaseWebSocket_1.Header.codDispositivo);
        var codTipoDispositivo = URLUtils_1.URLUtils.VerificarInteger(url, BaseWebSocket_1.Header.codTipoDispositivo);
        var codEmpresa = URLUtils_1.URLUtils.VerificarInteger(url, BaseWebSocket_1.Header.codEmpresa);
        var imei = URLUtils_1.URLUtils.VerificarString(url, BaseWebSocket_1.Header.imei);
        client[BaseWebSocket_1.Header.codDispositivo] = codDispositivo;
        client[BaseWebSocket_1.Header.codTipoDispositivo] = codTipoDispositivo;
        client[BaseWebSocket_1.Header.codEmpresa] = codEmpresa;
        client[BaseWebSocket_1.Header.imei] = imei;
        var dispositivo = new Dispositivo(codDispositivo, codEmpresa, codTipoDispositivo, imei, client);
        this.listDispositivo.push(dispositivo);
        console.log(this.listDispositivo.length + ' => tamanio de clientes');
        client.send('estas conectado :D');
    };
    ws.prototype.onTextMessage = function (data, cliente) {
        ws.observable.notificar(new DataWsDEO(data).getDataWs(), cliente);
    };
    ws.prototype.onBinaryMessage = function (binary, cliente) {
    };
    ws.prototype.onClose = function (code, reason, cliente) {
    };
    ws.observable = new Observable();
    return ws;
}(BaseWebSocket_1.BaseWebSocket));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ws;
//# sourceMappingURL=ws.js.map