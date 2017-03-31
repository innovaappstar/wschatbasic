"use strict";
var Utils = require("./Utils");
var Constantes = require("../constantes/Constantes");
/**
 * Created by innovaapps on 15/03/2017.
 */
var JSONUtils = (function () {
    function JSONUtils() {
    }
    JSONUtils.VerificarInteger = function (object, nomAtributo) {
        var n = object[nomAtributo];
        return (n == null || n.length == 0 || !Utils.isNumber(n)) ? 0 : Number(n);
    };
    JSONUtils.VerificarString = function (object, nomAtributo) {
        var s = object[nomAtributo];
        return (s == null || s.length == 0) ? "" : s;
    };
    /**
     * convierte objeto json in datagrama, lo recorre n veces
     * @param listObject
     * @param listNomAtributos
     * @returns {string}
     */
    JSONUtils.convertArrayJSONtoDatagrama = function (listObject, listNomAtributos) {
        var datagrama = '';
        for (var object in listObject) {
            var objetoJSON = JSONUtils.castingAnyStringToJSON(listObject[object]);
            var dataColumna = '';
            var numItemObtenido = 0;
            for (var nomAtributo in listNomAtributos) {
                var valorJson = objetoJSON[listNomAtributos[nomAtributo]];
                if (valorJson != null || valorJson != undefined) {
                    dataColumna += valorJson + Constantes.sepColumna; // add columna
                    numItemObtenido += 1;
                    if (numItemObtenido == listNomAtributos.length) {
                        dataColumna = Utils.removerUltimosCaracteres(dataColumna, 1);
                        datagrama += dataColumna + Constantes.sepFila;
                        break;
                    }
                }
            }
        }
        datagrama = Utils.removerUltimosCaracteres(datagrama, 1);
        return datagrama;
    };
    /**
     * convierte un arrayJSON string en un datagrama cabecera detalle :
     * 1 cabecera => string
     * n detalles => string[]
     * @param listObject JSON string
     * @param key string
     * @param listAtributos string[]
     * @returns {string} 3 | 123 | 1-2-3 : cabecera | detalle[] (info-1) | detalle[] (info-2)
     */
    JSONUtils.convertArrayJSONtoDatagramaCabeceraDetalle = function (listObject, key, listAtributos) {
        var datagrama = '';
        for (var object in listObject) {
            var objetoJSON = JSONUtils.castingAnyStringToJSON(listObject[object]);
            var cabeceraJSON = objetoJSON[key]; // obtiene valor de cabecera
            var detalleJSON = '';
            if (cabeceraJSON != null || cabeceraJSON != undefined) {
                for (var atributo in listAtributos) {
                    var detalleInicio = listObject[object][listAtributos[atributo]]; // obtiene valor de detalle
                    var detalleFin = '';
                    if (detalleInicio instanceof Array) {
                        for (var _i = 0, detalleInicio_1 = detalleInicio; _i < detalleInicio_1.length; _i++) {
                            var valor = detalleInicio_1[_i];
                            detalleFin += valor + Constantes.sepSubColumna;
                        } // -
                        detalleFin = Utils.removerUltimosCaracteres(detalleFin, 1);
                    }
                    else {
                        detalleFin = detalleInicio;
                    }
                    detalleJSON += detalleFin + Constantes.sepColumna; // |
                }
                detalleJSON = Utils.removerUltimosCaracteres(detalleJSON, 1);
            }
            datagrama += cabeceraJSON + Constantes.sepColumna + detalleJSON + Constantes.sepFila; // ~
        }
        datagrama = Utils.removerUltimosCaracteres(datagrama, 1);
        return datagrama;
    };
    /**
     * filtra elementos de un objeto Array y comprueba si tiene el
     * valor buscado para agregarlo al objeto final..
     * @param listObject Object[]
     * @param key string
     * @param valor string
     * @returns {Object[]}
     */
    JSONUtils.obtenerJSONConItemYValor = function (listObject, key, valor) {
        var objetoFiltrado = [];
        var num = 0;
        for (var object in listObject) {
            var objetoItem = JSONUtils.castingAnyStringToJSON(listObject[object]);
            var valorFromJSON = objetoItem[key]; // value from key
            if (valorFromJSON != null || valorFromJSON != undefined) {
                if (valorFromJSON == valor) {
                    objetoFiltrado[num] = objetoItem;
                    num += 1;
                }
            }
        }
        return objetoFiltrado;
    };
    /**
     * castea un string a json para los casos
     * en los que se envíen documentos de mongodb para serializarse
     * @param object string
     * @returns {any}
     */
    JSONUtils.castingAnyStringToJSON = function (object) {
        return JSON.parse(JSON.stringify(object));
    };
    return JSONUtils;
}());
module.exports = JSONUtils;
//# sourceMappingURL=JSONUtils.js.map