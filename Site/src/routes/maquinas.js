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

router.get("/obterDadosIniciaisCpu/:idMaquina/:fkBiblioteca", function (req, res) {
    maquinasController.obterDadosIniciaisCpu(req, res);
});

router.get("/atualizarGraficoCpu/:idMaquina/:fkBiblioteca", function (req, res) {
    maquinasController.atualizarGraficoCpu(req, res);
});

router.get("/obterDadosIniciaisMemoria/:idMaquina/:fkBiblioteca", function (req, res) {
    maquinasController.obterDadosIniciaisMemoria(req, res);
});

router.get("/atualizarGraficoMemoria/:idMaquina/:fkBiblioteca", function (req, res) {
    maquinasController.atualizarGraficoMemoria(req, res);
});

module.exports = router;