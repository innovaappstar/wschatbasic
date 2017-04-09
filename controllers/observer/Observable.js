"use strict";
var SesionObserver = require("./SesionObserver");
var MessageObserver_1 = require("../observer/MessageObserver");
/**
 * Created by innovaapps on 20/03/2017.
 */
var Observable = (function () {
    function Observable() {
    }
    Observable.prototype.agregarObservadoresPredeterminados = function () {
        Observable.listObservadores.push(new SesionObserver());
        Observable.listObservadores.push(new MessageObserver_1.MessageObserver());
    };
    Observable.prototype.removerObservadoresPredeterminados = function () {
        Observable.listObservadores = [];
    };
    Observable.prototype.agregarObservador = function (iObserver) {
        Observable.listObservadores.push(iObserver);
    };
    Observable.prototype.removerObservador = function (iObserver) {
        Observable.listObservadores.forEach(function (iObserverItem, index, listObservadores) {
            if (iObserver === iObserverItem) {
                Observable.listObservadores.splice(index, 1); // elimina un elemento que coincida- probar
                return;
            }
        });
    };
    Observable.prototype.notificar = function (dataWs, cliente) {
        Observable.listObservadores.forEach(function (iObserverItem, index, listObservadores) {
            iObserverItem.update(dataWs, cliente);
        });
    };
    Observable.listObservadores = [];
    return Observable;
}());
module.exports = Observable;
//# sourceMappingURL=Observable.js.map