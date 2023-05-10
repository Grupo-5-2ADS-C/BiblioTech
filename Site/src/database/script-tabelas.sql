
-- Criação das tabelas para azure conforme o script LOCAL baseado no DER.

-- Entidade biblioteca
CREATE TABLE biblioteca (
id_biblioteca INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(45),
CNPJ CHAR(14),
responsavel VARCHAR(45),
telefone CHAR(12),
email VARCHAR(100),
CONSTRAINT chkEmail CHECK (email LIKE '%@%.%' AND email NOT LIKE '@%' and email NOT LIKE '%.'),
login VARCHAR(45),
senha VARCHAR(256)
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

-- Entidade associativa entre biblioteca e endereco
-- CREATE TABLE dados_unicos_endereco (
-- fk_biblioteca INT,
-- FOREIGN KEY (fk_biblioteca) REFERENCES biblioteca(id_biblioteca),
-- fk_endereco INT,
-- FOREIGN KEY (fk_endereco) REFERENCES endereco(id_endereco),
-- PRIMARY KEY (fk_biblioteca, fk_endereco),
-- numero CHAR(5),
-- complemento VARCHAR(45)
-- );

-- Entidade funcionario
CREATE TABLE funcionario (
id_funcionario INT IDENTITY(1,1),
nome VARCHAR(45),
email VARCHAR(100),
CONSTRAINT chkEmailFuncionario CHECK (email LIKE '%@%.%' AND email NOT LIKE '@%' and email NOT LIKE '%.'),
celular CHAR(12),
login VARCHAR(45),
senha VARCHAR(256),
fk_biblioteca INT,
FOREIGN KEY (fk_biblioteca) REFERENCES biblioteca(id_biblioteca),
PRIMARY KEY (id_funcionario, fk_biblioteca)
);

-- Entidade maquina
CREATE TABLE maquina (
id_maquina INT PRIMARY KEY IDENTITY(1,1),
sistema_operacional VARCHAR(45),
fabricante VARCHAR(45),
arquitetura VARCHAR(45),
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
FOREIGN KEY (fk_componente_maquina) REFERENCES componente_maquina(id_componente_maquina),
fk_maquina INT,
FOREIGN KEY (fk_maquina) REFERENCES maquina(id_maquina),
numero_serial VARCHAR(100),
uso_maximo FLOAT,
freq_maxima FLOAT,
PRIMARY KEY (id_especificacao, fk_componente_maquina, fk_maquina)
);

-- Entidade metricas
CREATE TABLE metrica (
id_metrica INT IDENTITY(1,1),
uso FLOAT,
frequencia FLOAT,
fk_especificacao INT,
fk_componente_maquina INT,
fk_maquina INT,
FOREIGN KEY (fk_especificacao, fk_componente_maquina, fk_maquina) REFERENCES [dbo].[especificacao_componente_maquina](id_especificacao, fk_componente_maquina, fk_maquina),
PRIMARY KEY (id_metrica, fk_especificacao, fk_componente_maquina, fk_maquina)
);

-- Entidade alerta
CREATE TABLE alerta (
id_alerta INT IDENTITY(1,1),
dt_alerta DATETIME,
texto_aviso VARCHAR(100),
fk_metrica INT,
fk_componente_maquina INT,
fk_maquina INT,
fk_especificacao INT,
FOREIGN KEY (fk_metrica, fk_especificacao, fk_componente_maquina, fk_maquina) REFERENCES [dbo].[metrica](id_metrica, fk_especificacao, fk_componente_maquina, fk_maquina),
PRIMARY KEY (id_alerta, fk_metrica, fk_componente_maquina, fk_maquina, fk_especificacao),
fk_tipo_alerta INT,
FOREIGN KEY (fk_tipo_alerta) REFERENCES tipo_alerta (id_tipo_alerta),
fk_situacao_alerta INT,
FOREIGN KEY (fk_situacao_alerta) REFERENCES situacao_alerta (id_situacao_alerta)
); 

