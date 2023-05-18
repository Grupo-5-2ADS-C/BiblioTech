var express = require("express");
var router = express.Router();

var funcionariosController = require("../controllers/funcionariosController");

router.get("/listarFuncionarios/:fkBiblioteca", function (req, res) {
    funcionariosController.listarFuncionarios(req, res);
});

router.put("/editarFuncionario/:idFuncionario/:fkBiblioteca", function (req, res) {
    funcionariosController.editarFuncionario(req, res);
});

router.put("/editarSenhaFuncionario/:fkFuncionario/:fkBibliotecaFuncionario", function (req, res) {
    funcionariosController.editarSenhaFuncionario(req, res);
});

router.delete("/deletarFuncionario/:idFuncionario/:fkBiblioteca", function (req, res) {
    funcionariosController.deletarFuncionario(req, res);
});

router.delete("/deletarLoginFuncionario/:fkFuncionario/:fkBibliotecaFuncionario", function (req, res) {
    funcionariosController.deletarLoginFuncionario(req, res);
});

module.exports = router;