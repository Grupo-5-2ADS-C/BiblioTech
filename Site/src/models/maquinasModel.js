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
    m.id_metrica, comp.tipo, maq.id_maquina, m.uso, m.frequencia, FORMAT(dt_hora, 'dd/MM') AS dia,
    FORMAT(dt_hora, 'HH:mm:ss') AS horario
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
    m.id_metrica, comp.tipo, maq.id_maquina, m.uso, m.frequencia, FORMAT(dt_hora, 'dd/MM') AS dia,
    FORMAT(dt_hora, 'HH:mm:ss') AS horario
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

function obterDadosIniciaisMemoria(idMaquina, fkBiblioteca) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()", idMaquina, fkBiblioteca);
    var instrucao = `
    SELECT TOP 8
    m.id_metrica, comp.tipo, maq.id_maquina, m.uso, m.frequencia, FORMAT(dt_hora, 'dd/MM') AS dia,
    FORMAT(dt_hora, 'HH:mm:ss') AS horario
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
    m.id_metrica, comp.tipo, maq.id_maquina, m.uso, m.frequencia, FORMAT(dt_hora, 'dd/MM') AS dia,
    FORMAT(dt_hora, 'HH:mm:ss') AS horario
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

function obterDadosIniciaisDisco(idMaquina, fkBiblioteca) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()", idMaquina, fkBiblioteca);
    var instrucao = `
    SELECT TOP 1
    m.id_metrica, comp.tipo, maq.id_maquina, m.uso, m.frequencia, FORMAT(dt_hora, 'dd/MM') AS dia,
    FORMAT(dt_hora, 'HH:mm:ss') AS horario
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
        AND comp.tipo = 'Disco'
ORDER BY id_metrica DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarGraficoDisco(idMaquina, fkBiblioteca) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()", idMaquina, fkBiblioteca);
    var instrucao = `
    SELECT TOP 1
    m.id_metrica, comp.tipo, maq.id_maquina, m.uso, m.frequencia, FORMAT(dt_hora, 'dd/MM') AS dia,
    FORMAT(dt_hora, 'HH:mm:ss') AS horario
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
        AND comp.tipo = 'Disco'
ORDER BY id_metrica DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQtdProcessos(idMaquina, fkBiblioteca) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()", idMaquina, fkBiblioteca);
    var instrucao = `
    SELECT TOP 1
    m.id_metrica, m.total_processos
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
ORDER BY id_metrica DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function obterEspecificacoesMaquina(idMaquina, fkBiblioteca) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()", idMaquina, fkBiblioteca);
    var instrucao = `
    SELECT TOP 3 comp.tipo, comp.descricao, comp.fabricante, espec.uso_maximo, espec.freq_maxima, id_componente_maquina
	FROM componente_maquina comp 
		JOIN especificacao_componente_maquina espec 
			ON id_componente_maquina = fk_componente_maquina 
				JOIN maquina ON fk_maquina = id_maquina 
					WHERE fk_biblioteca = ${fkBiblioteca} AND fk_maquina = ${idMaquina} ORDER BY id_componente_maquina DESC
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function obterAlertasOciosidade(fkBiblioteca) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()", fkBiblioteca);
    var instrucao = `
    SELECT COUNT(id_alerta) as qtdAlertasOciosidade FROM alerta JOIN metrica
    ON fk_metrica = id_metrica JOIN maquina
        ON fk_maquina = id_maquina WHERE fk_tipo_alerta = 1 AND fk_biblioteca = ${fkBiblioteca} AND dt_alerta >= DATEADD(hour, -4, GETDATE());
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function obterAlertasHardware(fkBiblioteca) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()", fkBiblioteca);
    var instrucao = `
    SELECT COUNT(id_alerta) as qtdAlertasHardware FROM alerta JOIN metrica
    ON fk_metrica = id_metrica JOIN maquina
        ON fk_maquina = id_maquina WHERE fk_tipo_alerta = 2 AND fk_biblioteca = ${fkBiblioteca} AND dt_alerta >= DATEADD(hour, -4, GETDATE());
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarUsoMaquinas(fkBiblioteca) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()", fkBiblioteca);
    var instrucao = `
    SELECT *
    FROM (
        SELECT
            M.id_maquina AS Maquina,
            CM.tipo,
            Met.id_metrica,
            Met.uso,
            MR.velocidade_download,
            ROW_NUMBER() OVER (PARTITION BY M.id_maquina, CM.tipo ORDER BY Met.id_metrica DESC) AS RowNum
        FROM
            maquina M
        JOIN
            metrica Met ON M.id_Maquina = Met.fk_maquina
        JOIN
            componente_maquina CM ON Met.fk_componente_maquina = CM.id_componente_maquina
        JOIN
            metrica_rede MR ON M.id_maquina = MR.fk_maquina
        WHERE
            fk_biblioteca = ${fkBiblioteca}
    ) Subquery
    WHERE RowNum <= 1
    ORDER BY Maquina, tipo, id_metrica DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQtdAlertas(fkBiblioteca) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()", fkBiblioteca);
    var instrucao = `
    SELECT 
        COUNT(DISTINCT CASE WHEN alerta.fk_tipo_alerta = 1 THEN 1 END) AS ocioso,
        COUNT(DISTINCT CASE WHEN alerta.fk_tipo_alerta = 2 THEN 1 END) AS hardware
    FROM alerta
        JOIN metrica ON alerta.fk_metrica = metrica.id_metrica
        JOIN maquina ON metrica.fk_maquina = maquina.id_maquina
    WHERE alerta.dt_alerta >= DATEADD(SECOND, -7, GETDATE()) 
        AND fk_biblioteca = ${fkBiblioteca};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQtdMaquinasAtivas(fkBiblioteca) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()", fkBiblioteca);
    var instrucao = `
    SELECT count(id_maquina) FROM maquina WHERE fk_biblioteca = ${fkBiblioteca} AND is_ativa = 'true';
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
    listarQtdMaquinasAtivas,
};