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
                if (resultado.length >= 0) {
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
    var idMaquina = req.params.idMaquina;

    maquinasModel.editarMaquina(sistemaOperacional, setor, login, senha, fkBiblioteca, idMaquina)
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

// A FAZER 
// OBTER DADOS DE COMPONENTE DA MÁQUINA

function obterDadosIniciaisCpu(req, res) {
    var idMaquina = req.params.idMaquina;
    var fkBiblioteca = req.params.fkBiblioteca;

    if (fkBiblioteca != null || idMaquina != null) {
        maquinasModel.obterDadosIniciaisCpu(idMaquina, fkBiblioteca)
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

function atualizarGraficoCpu(req, res) {
    var idMaquina = req.params.idMaquina;
    var fkBiblioteca = req.params.fkBiblioteca;

    if (fkBiblioteca != null || idMaquina != null) {
        maquinasModel.obterDadosIniciaisCpu(idMaquina, fkBiblioteca)
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

function obterDadosIniciaisMemoria(req, res) {
    var idMaquina = req.params.idMaquina;
    var fkBiblioteca = req.params.fkBiblioteca;

    if (fkBiblioteca != null || idMaquina != null) {
        maquinasModel.obterDadosIniciaisMemoria(idMaquina, fkBiblioteca)
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

function atualizarGraficoMemoria(req, res) {
    var idMaquina = req.params.idMaquina;
    var fkBiblioteca = req.params.fkBiblioteca;

    if (fkBiblioteca != null || idMaquina != null) {
        maquinasModel.obterDadosIniciaisMemoria(idMaquina, fkBiblioteca)
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

function obterDadosIniciaisDisco(req, res) {
    var idMaquina = req.params.idMaquina;
    var fkBiblioteca = req.params.fkBiblioteca;

    if (fkBiblioteca != null || idMaquina != null) {
        maquinasModel.obterDadosIniciaisDisco(idMaquina, fkBiblioteca)
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

function atualizarGraficoDisco(req, res) {
    var idMaquina = req.params.idMaquina;
    var fkBiblioteca = req.params.fkBiblioteca;

    if (fkBiblioteca != null || idMaquina != null) {
        maquinasModel.obterDadosIniciaisDisco(idMaquina, fkBiblioteca)
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

function listarQtdProcessos(req, res) {
    var idMaquina = req.params.idMaquina;
    var fkBiblioteca = req.params.fkBiblioteca;

    if (fkBiblioteca != null || idMaquina != null) {
        maquinasModel.listarQtdProcessos(idMaquina, fkBiblioteca)
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

function obterEspecificacoesMaquina(req, res) {
    var idMaquina = req.params.idMaquina;
    var fkBiblioteca = req.params.fkBiblioteca;

    if (fkBiblioteca != null || idMaquina != null) {
        maquinasModel.obterEspecificacoesMaquina(idMaquina, fkBiblioteca)
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

function obterAlertasOciosidade(req, res) {
    var fkBiblioteca = req.params.fkBiblioteca;

    if (fkBiblioteca != null) {
        maquinasModel.obterAlertasOciosidade(fkBiblioteca)
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

function obterAlertasHardware(req, res) {
    var fkBiblioteca = req.params.fkBiblioteca;

    if (fkBiblioteca != null) {
        maquinasModel.obterAlertasHardware(fkBiblioteca)
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

function listarUsoMaquinas(req, res) {
    var fkBiblioteca = req.params.fkBiblioteca;

    if (fkBiblioteca != null) {
        maquinasModel.listarUsoMaquinas(fkBiblioteca)
            .then(function (resultado) {
                if (resultado.length >= 0) {
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

function listarQtdAlertas(req, res) {
    var fkBiblioteca = req.params.fkBiblioteca;

    if (fkBiblioteca != null) {
        maquinasModel.listarQtdAlertas(fkBiblioteca)
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


function obterDadosIniciaisRede(req, res) {
    var idMaquina = req.params.idMaquina;
    var fkBiblioteca = req.params.fkBiblioteca;

    if (fkBiblioteca != null || idMaquina != null) {
        maquinasModel.obterDadosIniciaisRede(idMaquina, fkBiblioteca)
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

function atualizarGraficoRede(req, res) {
    var idMaquina = req.params.idMaquina;
    var fkBiblioteca = req.params.fkBiblioteca;

    if (fkBiblioteca != null || idMaquina != null) {
        maquinasModel.atualizarGraficoRede(idMaquina, fkBiblioteca)
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

function listarMaquinasAtivas(req, res) {
    var fkBiblioteca = req.params.fkBiblioteca;

    if (fkBiblioteca != null) {
        maquinasModel.listarMaquinasAtivas(fkBiblioteca)
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

function listarTotalMaquinas(req, res) {
    var fkBiblioteca = req.params.fkBiblioteca;

    if (fkBiblioteca != null) {
        maquinasModel.listarTotalMaquinas(fkBiblioteca)
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

function listarTempoMedioUtilizador(req, res) {
    var fkBiblioteca = req.params.fkBiblioteca;

    if (fkBiblioteca != null) {
        maquinasModel.listarTempoMedioUtilizador(fkBiblioteca)
            .then(function (resultado) {
                if (resultado.length >= 0) {
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

function listarTempoUtilizado(req, res) {
    var fkMaquina = req.params.fkMaquina;
    var fkBiblioteca = req.params.fkBiblioteca;

    if (fkBiblioteca != null && fkMaquina != null) {
        maquinasModel.listarTempoUtilizado(fkMaquina, fkBiblioteca)
            .then(function (resultado) {
                if (resultado.length >= 0) {
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

function listarAlertaMaquina(req, res) {
    var fkMaquina = req.params.fkMaquina;
    var fkBiblioteca = req.params.fkBiblioteca;

    if (fkBiblioteca != null && fkMaquina != null) {
        maquinasModel.listarAlertaMaquina(fkMaquina, fkBiblioteca)
            .then(function (resultado) {
                if (resultado.length >= 0) {
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

function listarMediaRede(req, res) {
    var fkBiblioteca = req.params.fkBiblioteca;

    if (fkBiblioteca != null) {
        maquinasModel.listarMediaRede(fkBiblioteca)
            .then(function (resultado) {
                if (resultado.length >= 0) {
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

function listarRedeAtual(req, res) {
    var fkBiblioteca = req.params.fkBiblioteca;

    if (fkBiblioteca != null) {
        maquinasModel.listarRedeAtual(fkBiblioteca)
            .then(function (resultado) {
                if (resultado.length >= 0) {
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
    listarMaquinas,
    editarMaquina,
    deletarMaquina,
    obterDadosIniciaisCpu,
    atualizarGraficoCpu,
    obterDadosIniciaisMemoria,
    atualizarGraficoMemoria,
    obterDadosIniciaisDisco,
    atualizarGraficoDisco,
    listarQtdProcessos,
    obterEspecificacoesMaquina,
    obterAlertasOciosidade,
    obterAlertasHardware,
    listarUsoMaquinas,
    listarQtdAlertas,
    obterDadosIniciaisRede,
    atualizarGraficoRede,
    listarMaquinasAtivas,
    listarTotalMaquinas,
    listarTempoMedioUtilizador,
    listarTempoUtilizado,
    listarAlertaMaquina,
    listarMediaRede,
    listarRedeAtual,
}