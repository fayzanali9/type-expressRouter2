"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WelcomeController = void 0;
var express_1 = require("express");
var router = express_1.Router();
router.get('/', function (req, res) {
    res.send("hey everyone");
});
router.get('/:name', function (req, res) {
    var name = req.params.name;
    res.send("hey " + name);
});
exports.WelcomeController = router;
