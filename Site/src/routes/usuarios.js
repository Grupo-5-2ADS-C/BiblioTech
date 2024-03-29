var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/cadastrarLogin", function (req, res) {
    usuarioController.cadastrarLogin(req, res);
})

router.post("/cadastrarLoginFuncionario", function (req, res) {
    usuarioController.cadastrarLoginFuncionario(req, res);
})

router.post("/cadastrarFuncionario", function (req, res) {
    usuarioController.cadastrarFuncionario(req, res);
})

router.post("/cadastrarEndereco", function (req, res) {
    usuarioController.cadastrarEndereco(req, res);
})

router.post("/cadastrarMaquina", function (req, res) {
    usuarioController.cadastrarMaquina(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.get("/listarUsuarioAdmin/:fkBiblioteca", function (req, res) {
    usuarioController.listarUsuarioAdmin(req, res);
});

router.put("/editarUsuario/:idBiblioteca", function (req, res) {
    usuarioController.editarUsuario(req, res)
});

router.put("/editarUsuarioSenha/:fkBiblioteca", function (req, res) {
    usuarioController.editarUsuarioSenha(req, res)
});

module.exports = router;