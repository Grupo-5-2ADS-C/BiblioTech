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

module.exports = {
    listarFuncionarios,
}