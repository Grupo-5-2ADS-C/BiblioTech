
-- Criação das tabelas para azure conforme o script LOCAL baseado no DER.

-- Entidade biblioteca
CREATE TABLE biblioteca (
id_biblioteca INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(45),
CNPJ CHAR(14),
responsavel VARCHAR(45),
telefone CHAR(12),
email VARCHAR(100),
CONSTRAINT chkEmail CHECK (email LIKE '%@%.%' AND email NOT LIKE '@%' and email NOT LIKE '%.')
);

-- Entidade endereco
CREATE TABLE endereco (
id_endereco INT IDENTITY(1,1),
CEP CHAR(8),
logradouro VARCHAR(100),
bairro VARCHAR(100),
cidade VARCHAR(45),
numero CHAR(5),
complemento VARCHAR(45),
fk_biblioteca INT,
FOREIGN KEY (fk_biblioteca) REFERENCES biblioteca(id_biblioteca),
PRIMARY KEY (id_endereco, fk_biblioteca)
);

-- Entidade Cargo
CREATE TABLE cargo (
id_cargo INT PRIMARY KEY IDENTITY(1,1),
cargo VARCHAR(45)
);

-- Entidade funcionario
CREATE TABLE funcionario (
id_funcionario INT IDENTITY(1,1),
nome VARCHAR(45),
email VARCHAR(100),
CONSTRAINT chkEmailFuncionario CHECK (email LIKE '%@%.%' AND email NOT LIKE '@%' and email NOT LIKE '%.'),
celular CHAR(12),
fk_biblioteca INT,
FOREIGN KEY (fk_biblioteca) REFERENCES biblioteca(id_biblioteca),
PRIMARY KEY (id_funcionario, fk_biblioteca),
fk_cargo INT,
FOREIGN KEY (fk_cargo) REFERENCES [dbo].[cargo](id_cargo)
);

-- Entidade login
CREATE TABLE login (
id_login INT PRIMARY KEY IDENTITY(1,1),
login VARCHAR(45),
senha VARCHAR(256),
fk_biblioteca INT,
fk_funcionario INT,
fk_biblioteca_funcionario INT,
FOREIGN KEY (fk_funcionario, fk_biblioteca_funcionario) REFERENCES [dbo].[funcionario](id_funcionario, fk_biblioteca),
FOREIGN KEY (fk_biblioteca) REFERENCES [dbo].[biblioteca](id_biblioteca)
);

-- Entidade maquina
CREATE TABLE maquina (
id_maquina INT PRIMARY KEY IDENTITY(1,1),
sistema_operacional VARCHAR(45),
setor VARCHAR(45),
login VARCHAR(45),
senha VARCHAR(256),
fk_biblioteca INT,
FOREIGN KEY (fk_biblioteca) REFERENCES biblioteca(id_biblioteca)
);

-- Entidade componenteMaquina
CREATE TABLE componente_maquina (
id_componente_maquina INT PRIMARY KEY IDENTITY(1,1),
tipo VARCHAR(100),
descricao VARCHAR(100),
fabricante VARCHAR(100)
);

-- Entidade associativaComponenteMaquina
CREATE TABLE especificacao_componente_maquina (
id_especificacao INT IDENTITY(1,1),
fk_componente_maquina INT,
FOREIGN KEY (fk_componente_maquina) REFERENCES componente_maquina(id_componente_maquina) ON DELETE CASCADE,
fk_maquina INT,
FOREIGN KEY (fk_maquina) REFERENCES maquina(id_maquina) ON DELETE CASCADE,
numero_serial VARCHAR(100),
uso_maximo FLOAT,
freq_maxima FLOAT,
PRIMARY KEY (id_especificacao, fk_componente_maquina, fk_maquina)
);

-- Entidade metricas
CREATE TABLE metrica (
id_metrica INT IDENTITY(1,1) PRIMARY KEY,
uso FLOAT,
frequencia FLOAT,
fk_especificacao INT,
fk_componente_maquina INT,
fk_maquina INT,
FOREIGN KEY (fk_especificacao, fk_componente_maquina, fk_maquina) REFERENCES [dbo].[especificacao_componente_maquina](id_especificacao, fk_componente_maquina, fk_maquina) ON DELETE CASCADE,
total_processos INT
);

-- Entidade tipo_alerta
CREATE TABLE tipo_alerta (
id_tipo_alerta INT PRIMARY KEY IDENTITY(1,1),
tipo_alerta VARCHAR(45)
);

-- Entidade situacao_alerta
CREATE TABLE situacao_alerta (
id_situacao_alerta INT PRIMARY KEY IDENTITY(1,1),
situacao_alerta VARCHAR(45)
);

-- Entidade alerta
CREATE TABLE alerta (
id_alerta INT PRIMARY KEY IDENTITY(1,1),
dt_alerta DATETIME,
texto_aviso VARCHAR(256),
fk_metrica INT,
FOREIGN KEY (fk_metrica) REFERENCES [dbo].[metrica](id_metrica),
fk_tipo_alerta INT,
FOREIGN KEY (fk_tipo_alerta) REFERENCES [dbo].[tipo_alerta](id_tipo_alerta),
fk_situacao_alerta INT,
FOREIGN KEY (fk_situacao_alerta) REFERENCES [dbo].[situacao_alerta](id_situacao_alerta)
);

SELECT 
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
    fk_biblioteca = 1 AND id_maquina = 2
        AND comp.tipo = 'Processador'
ORDER BY id_metrica DESC;