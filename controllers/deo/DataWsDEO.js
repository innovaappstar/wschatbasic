"use strict";
/**
 * Created by innovaapps on 20/03/2017.
 */
var ArrayUtils = require('../../utils/ArrayUtils');
var DataWs = require("../entities/DataWs");
var Constantes = require("../../constantes/Constantes");
/**
 * DEO : Objeto deserializador de objetos
 */
var DataWsDEO = (function () {
    /**
     * deserializa cadena y setea atributos
     * @param datagrama string
     */
    function DataWsDEO(datagrama) {
        this.datagrama = '';
        this.datagrama = datagrama;
    }
    /**
     * obtiene atributos del datagrama entrante
     * @returns {DataWs}
     */
    DataWsDEO.prototype.getDataWs = function () {
        var listFilas = this.datagrama.split(Constantes.sepFila);
        var codigos = (listFilas.splice(0, 1).toString()).split(Constantes.sepColumna);
        var indiceWs = ArrayUtils.VerificarInteger(codigos, 0);
        var subIndiceWs = ArrayUtils.VerificarInteger(codigos, 1);
        var codigoData = ArrayUtils.VerificarInteger(codigos, 2);
        var data = listFilas.join(Constantes.sepFila); // string - no []
        return new DataWs(indiceWs, subIndiceWs, codigoData, data);
    };
    return DataWsDEO;
}());
module.exports = DataWsDEO;
//# sourceMappingURL=DataWsDEO.js.map