var express = require("express");
var router = express.Router();

var maquinasController = require("../controllers/maquinasController");

router.get("/listarMaquinas/:fkBiblioteca", function (req, res) {
    maquinasController.listarMaquinas(req, res);
});

module.exports = router;