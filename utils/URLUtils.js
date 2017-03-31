"use strict";
/**
 * Created by innovaapps on 15/03/2017.
 */
var qs = require("query-string");
var URLUtils = (function () {
    function URLUtils() {
    }
    /**
     * comprueba valor entero de un objeto query-string
     * @param url string
     * @param key string
     * @returns {string|string[]|null}
     */
    URLUtils.VerificarInteger = function (url, key) {
        url = url.substring(url.indexOf('?') + 1); // parseado de url /ws?*=*
        return qs.parse(url)[key];
    };
    /**
     * comprueba valor string de un objeto query-string
     * @param url string
     * @param key string
     * @returns {string|string[]|null}
     */
    URLUtils.VerificarString = function (url, key) {
        url = url.substring(url.indexOf('?') + 1); // parseado de url /ws?*=*
        return qs.parse(url)[key];
    };
    return URLUtils;
}());
module.exports = URLUtils;
//# sourceMappingURL=URLUtils.js.map