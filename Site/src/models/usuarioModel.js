var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(login, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", login, senha)
    var instrucao = `
        SELECT * FROM biblioteca WHERE login = '${login}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, CNPJ, responsavel, telefone, email) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, CNPJ, responsavel, telefone, email);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO biblioteca (nome, CNPJ, responsavel, telefone, email) VALUES ('${nome}', '${CNPJ}', '${responsavel}', '${telefone}', '${email}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarLogin(login, senha, fk_biblioteca, fk_funcionario, fk_funcionario_biblioteca) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", login, senha, fk_biblioteca, fk_funcionario, fk_funcionario_biblioteca);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO login (login, senha, fk_biblioteca, fk_funcionario, fk_biblioteca_funcionario) VALUES ('${login}', '${senha}', '${fk_biblioteca}', ${fk_funcionario}, ${fk_funcionario_biblioteca});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarEndereco(CEP, logradouro, bairro, cidade, numero, complemento) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", CEP, logradouro, bairro, cidade, numero, complemento);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO endereco (CEP, logradouro, bairro, cidade, numero, complemento, fk_biblioteca) VALUES ('${CEP}', '${logradouro}', '${bairro}', '${cidade}', '${numero}', '${complemento}', (SELECT TOP 1 id_biblioteca FROM biblioteca ORDER BY id_biblioteca DESC));
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarMaquina(sistemaOperacional, fabricante, arquitetura, setor, login, senha, fkBiblioteca) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", sistemaOperacional, fabricante, arquitetura, setor, login, senha, fkBiblioteca);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO maquina (sistema_operacional, fabricante, arquitetura, setor, login, senha, fk_biblioteca) VALUES ('${sistemaOperacional}', '${fabricante}', '${arquitetura}', '${setor}', '${login}', '${senha}', ${fkBiblioteca});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarFuncionario(nome, email, celular, fkCargo, fkBiblioteca) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, celular, fkCargo, fkBiblioteca);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO funcionario (nome, celular, email, fk_cargo, fk_biblioteca) VALUES (${nome}, ${celular}, ${email}, ${fkCargo}, ${fkBiblioteca})
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    cadastrarLogin,
    cadastrarEndereco,
    cadastrarMaquina,
    cadastrarFuncionario,
    listar,
};