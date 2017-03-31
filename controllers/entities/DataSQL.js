"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by innovaapps on 28/02/2017.
 */
var DataSQL = (function (_super) {
    __extends(DataSQL, _super);
    /**
     * @param codDispositivo Number
     * @param codEmpresa Number
     * @param nombreEmpresa Number
     * @param imei String
     * @param query String
     * @param flagExec  Number
     * @param idQuery Number
     */
    function DataSQL(codDispositivo, codEmpresa, nombreEmpresa, imei, query, flagExec, idQuery) {
        _super.call(this);
        this._codDispositivo = codDispositivo;
        this._codEmpresa = codEmpresa;
        this._nombreEmpresa = nombreEmpresa;
        this._imei = imei;
        this._query = query;
        this._flagExec = flagExec;
        this._idQuery = idQuery;
    }
    Object.defineProperty(DataSQL.prototype, "codDispositivo", {
        get: function () {
            return this._codDispositivo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSQL.prototype, "codEmpresa", {
        get: function () {
            return this._codEmpresa;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSQL.prototype, "nombreEmpresa", {
        get: function () {
            return this._nombreEmpresa;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSQL.prototype, "imei", {
        get: function () {
            return this._imei;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSQL.prototype, "query", {
        get: function () {
            return this._query;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSQL.prototype, "flagExec", {
        get: function () {
            return this._flagExec;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSQL.prototype, "idQuery", {
        get: function () {
            return this._idQuery;
        },
        enumerable: true,
        configurable: true
    });
    return DataSQL;
}(AbstractEntity));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DataSQL;
//# sourceMappingURL=DataSQL.js.map