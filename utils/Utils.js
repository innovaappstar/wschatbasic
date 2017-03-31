/**
 * Created by innovaapps on 15/03/2017.
 */
"use strict";
var Utils = (function () {
    function Utils() {
    }
    /**
     * comprueba si el valor n es un número
     * @param n any
     * @returns {boolean}
     */
    Utils.isNumber = function (n) {
        return !isNaN(n) && isFinite(n);
    };
    /**
     * remueve n carácteres finales
     * @param s string
     * @param n number
     * @returns {string}
     */
    Utils.removerUltimosCaracteres = function (s, n) {
        if (s.length > 0)
            s = s.substring(0, (s.length - n));
        return s;
    };
    return Utils;
}());
module.exports = Utils;
//# sourceMappingURL=Utils.js.map