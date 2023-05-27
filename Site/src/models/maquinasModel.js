var database = require("../database/config")

function listarMaquinas(fkBiblioteca) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()", fkBiblioteca);
    var instrucao = `
        SELECT * FROM maquina WHERE fk_biblioteca = ${fkBiblioteca};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editarMaquina(sistemaOperacional, setor, login, senha, fkBiblioteca) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", sistemaOperacional, setor, login, senha, fkBiblioteca);
    var instrucao = `
        UPDATE maquina SET sistema_operacional = '${sistemaOperacional}', setor = '${setor}', login = '${login}', senha = '${senha}' WHERE fk_biblioteca = ${fkBiblioteca};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletarMaquina(idMaquina, fkBiblioteca) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", idMaquina, fkBiblioteca);
    var instrucao = `
         DELETE FROM maquina WHERE id_maquina = ${idMaquina} and fK_biblioteca = ${fkBiblioteca}
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarMaquinas(fkBiblioteca) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()", fkBiblioteca);
    var instrucao = `
        SELECT * FROM maquina WHERE fk_biblioteca = ${fkBiblioteca};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function obterDadosIniciaisCpu(idMaquina, fkBiblioteca) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()", idMaquina, fkBiblioteca);
    var instrucao = `
    SELECT TOP 8
    m.id_metrica, comp.tipo, maq.id_maquina, m.uso, m.frequencia
FROM
    maquina maq
        JOIN
    especificacao_componente_maquina espec ON maq.id_maquina = espec.fk_maquina
        JOIN
    componente_maquina comp ON espec.fk_componente_maquina = comp.id_componente_maquina
        JOIN
    metrica m ON comp.id_componente_maquina = m.fk_componente_maquina
WHERE
    fk_biblioteca = ${fkBiblioteca} AND id_maquina = ${idMaquina}
        AND comp.tipo = 'Processador'
ORDER BY id_metrica DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarGraficoCpu(idMaquina, fkBiblioteca) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()", idMaquina, fkBiblioteca);
    var instrucao = `
    SELECT TOP 1
    m.id_metrica, comp.tipo, maq.id_maquina, m.uso, m.frequencia
FROM
    maquina maq
        JOIN
    especificacao_componente_maquina espec ON maq.id_maquina = espec.fk_maquina
        JOIN
    componente_maquina comp ON espec.fk_componente_maquina = comp.id_componente_maquina
        JOIN
    metrica m ON comp.id_componente_maquina = m.fk_componente_maquina
WHERE
    fk_biblioteca = ${fkBiblioteca} AND id_maquina = ${idMaquina}
        AND comp.tipo = 'Processador'
ORDER BY id_metrica DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function obterDadosIniciaisCpu(idMaquina, fkBiblioteca) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()", idMaquina, fkBiblioteca);
    var instrucao = `
    SELECT TOP 8
    m.id_metrica, comp.tipo, maq.id_maquina, m.uso, m.frequencia
FROM
    maquina maq
        JOIN
    especificacao_componente_maquina espec ON maq.id_maquina = espec.fk_maquina
        JOIN
    componente_maquina comp ON espec.fk_componente_maquina = comp.id_componente_maquina
        JOIN
    metrica m ON comp.id_componente_maquina = m.fk_componente_maquina
WHERE
    fk_biblioteca = ${fkBiblioteca} AND id_maquina = ${idMaquina}
        AND comp.tipo = 'Memoria ram'
ORDER BY id_metrica DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarGraficoMemoria(idMaquina, fkBiblioteca) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()", idMaquina, fkBiblioteca);
    var instrucao = `
    SELECT TOP 1
    m.id_metrica, comp.tipo, maq.id_maquina, m.uso, m.frequencia
FROM
    maquina maq
        JOIN
    especificacao_componente_maquina espec ON maq.id_maquina = espec.fk_maquina
        JOIN
    componente_maquina comp ON espec.fk_componente_maquina = comp.id_componente_maquina
        JOIN
    metrica m ON comp.id_componente_maquina = m.fk_componente_maquina
WHERE
    fk_biblioteca = ${fkBiblioteca} AND id_maquina = ${idMaquina}
        AND comp.tipo = 'Memoria ram'
ORDER BY id_metrica DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarMaquinas,
    editarMaquina,
    deletarMaquina,
    obterDadosIniciaisCpu,
    atualizarGraficoCpu,
    obterDadosIniciais,
    atualizarGraficoMemoria,
};