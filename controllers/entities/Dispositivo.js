"use strict";
var Dispositivo = (function () {
    /**
     * @param codDispositivo number
     * @param codEmpresa number
     * @param codTipoDispositivo number
     * @param imei string - 11 || 16 dgts
     * @param webSocket WebSocket
     */
    function Dispositivo(codDispositivo, codEmpresa, codTipoDispositivo, imei, webSocket) {
        this._codDispositivo = codDispositivo;
        this._codEmpresa = codEmpresa;
        this._codTipoDispositivo = codTipoDispositivo;
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
    Object.defineProperty(Dispositivo.prototype, "codEmpresa", {
        get: function () {
            return this._codEmpresa;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dispositivo.prototype, "codTipoDispositivo", {
        get: function () {
            return this._codTipoDispositivo;
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