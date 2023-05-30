var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
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
}

function entrar(req, res) {
    var login = req.body.loginServer;
    var senha = req.body.senhaServer;

    if (login == undefined) {
        res.status(400).send("Seu login está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.entrar(login, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Login e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var CNPJ = req.body.CNPJServer;
    var responsavel = req.body.responsavelServer;
    var telefone = req.body.telefoneServer;
    var email = req.body.emailServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (CNPJ == undefined) {
        res.status(400).send("Seu CNPJ está undefined!");
    } else if (responsavel == undefined) {
        res.status(400).send("Seu responsavel está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, CNPJ, responsavel, telefone, email)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarLogin(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var login = req.body.loginServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (login == undefined) {
        res.status(400).send("Seu login está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarLogin(login, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarLoginFuncionario(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var login = req.body.loginServer;
    var senha = req.body.senhaServer;
    var fkBibliotecaFuncionario = req.body.fkBibliotecaFuncionarioServer;

    // Faça as validações dos valores
    if (login == undefined) {
        res.status(400).send("Seu login está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (fkBibliotecaFuncionario == undefined) {
        res.status(400).send("Sua fkBibliotecaFuncionario está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarLoginFuncionario(login, senha, fkBibliotecaFuncionario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarFuncionario(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var celular = req.body.celularServer;
    var fkBiblioteca = req.body.fkBibliotecaServer;
    var cargo = req.body.cargoServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (celular == undefined) {
        res.status(400).send("Seu celular está undefined!");
    } else if (fkBiblioteca == undefined) {
        res.status(400).send("Sua fkBiblioteca está undefined!");
    } else if (cargo == undefined) {
        res.status(400).send("Seu cargo está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarFuncionario(nome, email, celular, fkBiblioteca, cargo)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarEndereco(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var CEP = req.body.CEPServer;
    var logradouro = req.body.logradouroServer;
    var bairro = req.body.bairroServer;
    var cidade = req.body.cidadeServer;
    var numero = req.body.numeroServer;
    var complemento = req.body.complementoServer;

    // Faça as validações dos valores
    if (CEP == undefined) {
        res.status(400).send("Seu CEP está undefined!");
    } else if (logradouro == undefined) {
        res.status(400).send("Seu logradouro está undefined!");
    } else if (bairro == undefined) {
        res.status(400).send("Seu bairro está undefined!");
    } else if (cidade == undefined) {
        res.status(400).send("Sua cidade está undefined!");
    } else if (numero == undefined) {
        res.status(400).send("Seu numero está undefined!");
    } else if (complemento == undefined) {
        res.status(400).send("Seu complemento está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarEndereco(CEP, logradouro, bairro, cidade, numero, complemento)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarMaquina(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var sistemaOperacional = req.body.soServer;
    var setor = req.body.setorServer;
    var login = req.body.loginServer;
    var senha = req.body.senhaServer;
    var fkBiblioteca = req.body.fkBibliotecaServer;

    // Faça as validações dos valores
    if (sistemaOperacional == undefined) {
        res.status(400).send("Seu sistema operacional está undefined!");
    } else if (setor == undefined) {
        res.status(400).send("Seu setor está undefined!");
    } else if (login == undefined) {
        res.status(400).send("Seu login está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (fkBiblioteca == undefined) {
        res.status(400).send("Sua FK está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarMaquina(sistemaOperacional, setor, login, senha, fkBiblioteca)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listarUsuarioAdmin(req, res) {
    var fkBiblioteca = req.params.fkBiblioteca;

    usuarioModel.listarUsuarioAdmin(fkBiblioteca)
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
}

function editarUsuario(req, res) {
    var email = req.body.email;
    var telefone = req.body.telefone;
    var idBiblioteca = req.params.idBiblioteca;

    usuarioModel.editarUsuario(email, telefone, idBiblioteca)
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

function editarUsuarioSenha(req, res) {
    var login = req.body.login;
    var senha = req.body.senha;
    var fkBiblioteca = req.params.fkBiblioteca;

    usuarioModel.editarUsuarioSenha(login, senha, fkBiblioteca)
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
    entrar,
    cadastrar,
    cadastrarLogin,
    cadastrarLoginFuncionario,
    cadastrarEndereco,
    cadastrarMaquina,
    cadastrarFuncionario,
    listar,
    testar,
    listarUsuarioAdmin,
    editarUsuario,
    editarUsuarioSenha,
}