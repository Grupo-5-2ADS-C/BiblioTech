
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

-- Entidade usuario
CREATE TABLE usuario (
id_usuario INT IDENTITY(1,1),
nome VARCHAR(45),
cargo VARCHAR(45),
email VARCHAR(100),
CONSTRAINT chkEmailUsuario CHECK (email LIKE '%@%.%' AND email NOT LIKE '@%' and email NOT LIKE '%.'),
login VARCHAR(45),
senha VARCHAR(256),
fk_biblioteca INT,
FOREIGN KEY (fk_biblioteca) REFERENCES biblioteca(id_biblioteca),
PRIMARY KEY (id_usuario, fk_biblioteca)
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
CREATE TABLE associativa_componente_maquina (
fk_componente_maquina INT,
FOREIGN KEY (fk_componente_maquina) REFERENCES componente_maquina(id_componente_maquina),
fk_maquina INT,
FOREIGN KEY (fk_maquina) REFERENCES maquina(id_maquina),
numero_serial VARCHAR(100),
uso_maximo FLOAT,
freq_maxima FLOAT,
PRIMARY KEY (fk_componente_maquina, fk_maquina)
);

-- Entidade metricas
CREATE TABLE metrica (
id_metrica INT IDENTITY(1,1),
uso FLOAT,
frequencia FLOAT,
fk_componente_maquina INT,
FOREIGN KEY (fk_componente_maquina) REFERENCES componente_maquina(id_componente_maquina),
fk_maquina INT,
FOREIGN KEY (fk_maquina) REFERENCES maquina(id_maquina),
PRIMARY KEY (id_metrica, fk_componente_maquina, fk_maquina)
);

-- Entidade alerta
CREATE TABLE alerta (
id_alerta INT IDENTITY(1,1),
dt_alerta DATETIME,
texto_aviso VARCHAR(100),
fk_metrica INT,
FOREIGN KEY (fk_metrica) REFERENCES metrica(id_metrica),
fk_componente_maquina INT,
FOREIGN KEY (fk_componente_maquina) REFERENCES componente_maquina(id_componente_maquina),
fk_maquina INT,
FOREIGN KEY (fk_maquina) REFERENCES maquina(id_maquina),
PRIMARY KEY (id_alerta, fk_metrica, fk_componente_maquina));