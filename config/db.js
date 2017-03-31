"use strict";
/**
 * Created by innovaapps on 03/03/2017.
 */
var mongoose = require('mongoose');
var DataSQLDocumentModel = require('../models/DataSQL/DataSQLDocumentModel');
var KeyTarjetaDocumentModel_1 = require('../models/KeyTarjeta/KeyTarjetaDocumentModel');
var db = (function () {
    function db() {
    }
    db.connect = function (db) {
        mongoose.connect('mongodb://' + db);
    };
    db.debug = function (debug) {
        mongoose.set('debug', debug);
    };
    Object.defineProperty(db, "DataSQL", {
        get: function () {
            return DataSQLDocumentModel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(db, "KeyTarjeta", {
        get: function () {
            return KeyTarjetaDocumentModel_1.KeyTarjetaDocumentModel;
        },
        enumerable: true,
        configurable: true
    });
    return db;
}());
module.exports = db;
//# sourceMappingURL=db.js.map