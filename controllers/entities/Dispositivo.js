"use strict";
var Dispositivo = (function () {
    /**
     * @param codDispositivo number
     * @param imei string - 11 || 16 dgts
     * @param webSocket WebSocket
     */
    function Dispositivo(codDispositivo, imei, webSocket) {
        this._codDispositivo = codDispositivo;
        this._imei = imei;
        this._webSocket = webSocket;
    }
    Object.defineProperty(Dispositivo.prototype, "codDispositivo", {
        get: function () {
            return this._codDispositivo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dispositivo.prototype, "imei", {
        get: function () {
            return this._imei;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dispositivo.prototype, "webSocket", {
        get: function () {
            return this._webSocket;
        },
        enumerable: true,
        configurable: true
    });
    return Dispositivo;
}());
module.exports = Dispositivo;
//# sourceMappingURL=Dispositivo.js.map