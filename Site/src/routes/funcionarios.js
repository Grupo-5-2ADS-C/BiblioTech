var express = require("express");
var router = express.Router();

var funcionariosController = require("../controllers/funcionariosController");

router.get("/listarFuncionarios/:fkBiblioteca", function (req, res) {
    funcionariosController.listarFuncionarios(req, res);
});

module.exports = router;