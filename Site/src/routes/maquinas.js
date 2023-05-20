var express = require("express");
var router = express.Router();

var maquinasController = require("../controllers/maquinasController");

router.get("/listarMaquinas/:fkBiblioteca", function (req, res) {
    maquinasController.listarMaquinas(req, res);
});

router.put("/editarMaquina/:fkBiblioteca", function (req, res) {
    maquinasController.editarMaquina(req, res);
});

router.delete("/deletarMaquina/:idMaquina/:fkBiblioteca", function (req, res) {
    maquinasController.deletarMaquina(req, res);
});

module.exports = router;