/**
 * Created by innovaapps on 14/03/2017.
 */
"use strict";
var express_1 = require('express');
var router = express_1.Router();
// private static instance : ws = new ws();
// console.log('servidor escuchando en el puerto 3000..');
router.get('/ws', function (req, res) {
    res.render('index');
    // res.send('signup called');
    // res.status(404).send('disculpa, no se encontró la página.')
});
router.post('/ws', function (req, res) {
    res.send('signup called');
    // res.status(404).send('disculpa, no se encontró la página.')
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//# sourceMappingURL=wsRoutes.js.map