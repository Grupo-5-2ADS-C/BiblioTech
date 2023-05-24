var database = require("../database/config")

function listarFuncionarios(fkBiblioteca) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()", fkBiblioteca);
    var instrucao = `
        SELECT * FROM funcionario join login on id_funcionario = fk_funcionario where fk_biblioteca_funcionario = ${fkBiblioteca};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editarFuncionario(nome, email, celular, cargo, idFuncionario, fkBiblioteca) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", nome, email, celular, cargo, idFuncionario, fkBiblioteca);
    var instrucao = `
        UPDATE funcionario SET nome = '${nome}', email = '${email}', celular = '${celular}', fk_cargo = ${cargo} WHERE id_funcionario = ${idFuncionario} and fk_biblioteca = ${fkBiblioteca};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editarSenhaFuncionario(login, senha, fkFuncionario, fkBibliotecaFuncionario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", login, senha, fkFuncionario, fkBibliotecaFuncionario);
    var instrucao = `
        UPDATE login SET login = '${login}', senha = '${senha}' WHERE fk_funcionario = ${fkFuncionario} and fk_biblioteca_funcionario = ${fkBibliotecaFuncionario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletarFuncionario(idFuncionario, fkBiblioteca) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", idFuncionario, fkBiblioteca);
    var instrucao = `
         DELETE FROM funcionario WHERE id_funcionario = ${idFuncionario} and fk_biblioteca = ${fkBiblioteca}
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletarLoginFuncionario(fkFuncionario, fkBibliotecaFuncionario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", fkFuncionario, fkBibliotecaFuncionario);
    var instrucao = `
         DELETE FROM login WHERE fk_funcionario = ${fkFuncionario} and fk_biblioteca_funcionario = ${fkBibliotecaFuncionario}
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarFuncionarios,
    editarFuncionario,
    editarSenhaFuncionario,
    deletarFuncionario,
    deletarLoginFuncionario,
};