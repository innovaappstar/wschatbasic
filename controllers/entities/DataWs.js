"use strict";
var indices_1 = require("../../config/indices");
/**
 * entidad de datos entrantes
 */
var DataWs = (function () {
    /**
     * @param indiceWs number
     * @param subIndiceWs number
     * @param codigoData number
     * @param data string
     */
    function DataWs(indiceWs, subIndiceWs, codigoData, data) {
        this._indiceWs = 0;
        this._subIndiceWs = 0;
        this._codigoData = 0;
        this._data = '';
        this._indiceWs = indiceWs;
        this._subIndiceWs = subIndiceWs;
        this._codigoData = codigoData;
        this._data = data;
    }
    Object.defineProperty(DataWs.prototype, "indiceWs", {
        get: function () {
            return this._indiceWs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataWs.prototype, "subIndiceWs", {
        get: function () {
            return this._subIndiceWs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataWs.prototype, "codigoData", {
        get: function () {
            return this._codigoData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataWs.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    DataWs.prototype.isTipoSesion = function () {
        return (this._indiceWs == indices_1.default.TIPOSESION.indice);
    };
    DataWs.prototype.isInicioSesion = function () {
        return (this._subIndiceWs == indices_1.default.TIPOSESION.subIndices.inicioSesion);
    };
    DataWs.prototype.isCierreSesion = function () {
        return (this._subIndiceWs == indices_1.default.TIPOSESION.subIndices.cierreSesion);
    };
    DataWs.prototype.isTipoMessage = function () {
        return (this._indiceWs == indices_1.default.TIPOMESSAGE.indice);
    };
    DataWs.prototype.isRegistroMessage = function () {
        return (this._subIndiceWs == indices_1.default.TIPOMESSAGE.subIndices.registroMessage);
    };
    DataWs.prototype.isNuevoMessage = function () {
        return (this._subIndiceWs == indices_1.default.TIPOMESSAGE.subIndices.nuevoMessage);
    };
    DataWs.prototype.isTipoSolicitud = function () {
        return (this._indiceWs == indices_1.default.TIPOSOLICITUD.indice);
    };
    DataWs.prototype.isRecargarMensaje = function () {
        return (this._subIndiceWs == indices_1.default.TIPOSOLICITUD.subIndices.recargarMensajes);
    };
    return DataWs;
}());
module.exports = DataWs;
//# sourceMappingURL=DataWs.js.map