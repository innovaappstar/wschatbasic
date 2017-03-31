"use strict";
/**
 * Created by innovaapps on 02/03/2017.
 */
var env = 'desarrollo';
var config = {
    desarrollo: {
        app: {
            nombre: 'servidor-procesador'
        },
        puerto: process.env.PORT || 3000,
        host: 'localhost',
        db: 'localhost:27017/vci'
    },
    test: {
        app: {
            nombre: 'servidor-procesador'
        },
        puerto: process.env.PORT || 3000,
        host: 'localhost',
        db: '192.168.1.99:27017/wsgps-development'
    },
    produccion: {
        app: {
            nombre: 'servidor-procesador'
        },
        puerto: process.env.PORT || 3000,
        host: 'localhost',
        db: '192.168.1.99:27017/wsgps-development'
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = config[env];
//# sourceMappingURL=Config.js.map