"use strict";
/**
 * Created by kenny on 30/03/2017.
 */
var express_1 = require('express');
var router = express_1.Router();
router.get('/', function (req, res) {
    res.render('index');
});
router.post('/', function (req, res) {
    res.send('signup called');
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//# sourceMappingURL=homeRoutes.js.map