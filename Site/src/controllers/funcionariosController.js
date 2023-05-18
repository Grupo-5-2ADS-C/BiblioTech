var funcionariosModel = require("../models/funcionariosModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listarFuncionarios(req, res) {
    var fkBiblioteca = req.params.fkBiblioteca;

    if (fkBiblioteca != null) {
        funcionariosModel.listarFuncionarios(fkBiblioteca)
            .then(function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!")
                }
            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    } else {
        res.status(400).send("fkBiblioteca é inválida!")
    }
}

function editarFuncionario(req, res) {
    var nome = req.body.nome;
    var email = req.body.email;
    var celular = req.body.celular;
    var cargo = req.body.cargo;
    var idFuncionario = req.params.idFuncionario;
    var fkBiblioteca = req.params.fkBiblioteca;

    funcionariosModel.editarFuncionario(nome, email, celular, cargo, idFuncionario, fkBiblioteca)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function editarSenhaFuncionario(req, res) {
    var login = req.body.login;
    var senha = req.body.senha;
    var fkFuncionario = req.params.fkFuncionario;
    var fkBibliotecaFuncionario = req.params.fkBibliotecaFuncionario;

    funcionariosModel.editarSenhaFuncionario(login, senha, fkFuncionario, fkBibliotecaFuncionario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function deletarFuncionario(req, res) {
    var idFuncionario = req.params.idFuncionario;
    var fkBiblioteca = req.params.fkBiblioteca;

    funcionariosModel.deletarFuncionario(idFuncionario, fkBiblioteca)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function deletarLoginFuncionario(req, res) {
    var fkFuncionario = req.params.fkFuncionario;
    var fkBibliotecaFuncionario = req.params.fkBibliotecaFuncionario;

    funcionariosModel.deletarLoginFuncionario(fkFuncionario, fkBibliotecaFuncionario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    listarFuncionarios,
    editarFuncionario,
    editarSenhaFuncionario,
    deletarFuncionario,
    deletarLoginFuncionario,
}