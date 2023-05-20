var maquinasModel = require("../models/maquinasModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listarMaquinas(req, res) {
    var fkBiblioteca = req.params.fkBiblioteca;

    if (fkBiblioteca != null) {
        maquinasModel.listarMaquinas(fkBiblioteca)
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

function editarMaquina(req, res) {
    var sistemaOperacional = req.body.sistemaOperacional;
    var setor = req.body.setor;
    var login = req.body.login;
    var senha = req.body.senha;
    var fkBiblioteca = req.params.fkBiblioteca;

    maquinasModel.editarMaquina(sistemaOperacional, setor, login, senha, fkBiblioteca)
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

function deletarMaquina(req, res) {
    var idMaquina = req.params.idMaquina;
    var fkBiblioteca = req.params.fkBiblioteca;

    maquinasModel.deletarMaquina(idMaquina, fkBiblioteca)
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
    listarMaquinas,
    editarMaquina,
    deletarMaquina,
}