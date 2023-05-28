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

router.get("/obterDadosIniciaisDisco/:idMaquina/:fkBiblioteca", function (req, res) {
    maquinasController.obterDadosIniciaisDisco(req, res);
});

router.get("/atualizarGraficoDisco/:idMaquina/:fkBiblioteca", function (req, res) {
    maquinasController.atualizarGraficoDisco(req, res);
});

router.get("/listarQtdProcessos/:idMaquina/:fkBiblioteca", function (req, res) {
    maquinasController.listarQtdProcessos(req, res);
});

router.get("/obterEspecificacoesMaquina/:idMaquina/:fkBiblioteca", function (req, res) {
    maquinasController.obterEspecificacoesMaquina(req, res);
});

router.get("/obterAlertasOciosidade/:fkBiblioteca", function (req, res) {
    maquinasController.obterAlertasOciosidade(req, res);
});

router.get("/obterAlertasHardware/:fkBiblioteca", function (req, res) {
    maquinasController.obterAlertasHardware(req, res);
});

router.get("/listarUsoMaquinas/:fkBiblioteca", function (req, res) {
    maquinasController.listarUsoMaquinas(req, res);
});

module.exports = router;