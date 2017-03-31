"use strict";
var Utils = require("./Utils");
var Constantes = require("../constantes/Constantes");
/**
 * Created by innovaapps on 15/03/2017.
 */
var ArrayUtils = (function () {
    function ArrayUtils() {
    }
    /**
     * @param data string[]
     * @param posicion number
     * @returns {string}
     * @constructor
     */
    ArrayUtils.VerificarInteger = function (data, posicion) {
        var n = data[posicion];
        return (n == null || n.length == 0 || !Utils.isNumber(n)) ? 0 : Number(n);
    };
    /**
     * @param data string[]
     * @param posicion number
     * @returns {string}
     * @constructor
     */
    ArrayUtils.VerificarString = function (data, posicion) {
        var s = data[posicion];
        return (s == null || s.length == 0) ? "" : s;
    };
    /**
     * convierte arreglo string en un datagrama separado por sep filas #
     * @param arData string[]
     * @returns {string} data#data2
     */
    ArrayUtils.convertArrayStringToDatagrama = function (arData) {
        var datagrama = '';
        for (var _i = 0, arData_1 = arData; _i < arData_1.length; _i++) {
            var data = arData_1[_i];
            datagrama += data + Constantes.sepDatagrama;
        }
        datagrama = Utils.removerUltimosCaracteres(datagrama, 1);
        return datagrama;
    };
    return ArrayUtils;
}());
module.exports = ArrayUtils;
//# sourceMappingURL=ArrayUtils.js.map