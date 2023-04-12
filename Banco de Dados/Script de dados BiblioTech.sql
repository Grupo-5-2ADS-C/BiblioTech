/* Comandos para mysql - banco local - ambiente de desenvolvimento */
-- Criação da banco de dados do projeto BiblioTech

CREATE DATABASE bibliotech;
USE bibliotech;

-- Criação das tabelas conforme o DER.

-- Entidade biblioteca
CREATE TABLE biblioteca (
idBiblioteca INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
CNPJ CHAR(14),
responsavel VARCHAR(45),
telefone CHAR(12),
email VARCHAR(100),
CONSTRAINT chkEmail CHECK (email LIKE '%@%.%' AND email NOT LIKE '@%' and email NOT LIKE '%.'), 
login VARCHAR(45),
senha VARCHAR(256));

-- Entidade endereco
CREATE TABLE endereco (
idEndereco INT PRIMARY KEY AUTO_INCREMENT,
CEP CHAR(8),
logradouro VARCHAR(100),
bairro VARCHAR(100),
cidade VARCHAR(45));

-- Entidade associativa entre biblioteca e endereco
CREATE TABLE dadosUnicosEndereco (
fkBiblioteca INT,
FOREIGN KEY (fkBiblioteca) REFERENCES biblioteca(idBiblioteca),
fkEndereco INT,
FOREIGN KEY (fkEndereco) REFERENCES endereco(idEndereco),
PRIMARY KEY (fkBiblioteca, fkEndereco),
numero CHAR(5),
complemento VARCHAR(45)
);

-- Entidade usuario
CREATE TABLE usuario (
idUsuario INT AUTO_INCREMENT,
nome VARCHAR(45),
cargo VARCHAR(45),
email VARCHAR(100),
CONSTRAINT chkEmailUsuario CHECK (email LIKE '%@%.%' AND email NOT LIKE '@%' and email NOT LIKE '%.'), 
login VARCHAR(45),
senha VARCHAR(256),
fkBiblioteca INT,
FOREIGN KEY (fkBiblioteca) REFERENCES biblioteca(idBiblioteca),
PRIMARY KEY (idUsuario, fkBiblioteca)
);

-- Entidade maquina
CREATE TABLE maquina (
idMaquina INT PRIMARY KEY AUTO_INCREMENT,
sistemaOperacional VARCHAR(45),
fabricante VARCHAR(45),
arquitetura VARCHAR(45),
setor VARCHAR(45),
login VARCHAR(45),
senha VARCHAR(256),
fkBiblioteca INT,
FOREIGN KEY (fkBiblioteca) REFERENCES biblioteca(idBiblioteca)
);

-- Entidade componenteMaquina
CREATE TABLE componenteMaquina (
idComponenteMaquina INT PRIMARY KEY AUTO_INCREMENT,
tipo VARCHAR(100),
descricao VARCHAR(100),
fabricante VARCHAR(100)
);

-- Entidade associativaComponenteMaquina
CREATE TABLE associativaComponenteMaquina (
fkComponenteMaquina INT,
FOREIGN KEY (fkComponenteMaquina) REFERENCES componenteMaquina(idComponenteMaquina),
fkMaquina INT,
FOREIGN KEY (fkMaquina) REFERENCES maquina(idMaquina),
numeroSerial VARCHAR(100),
usoMaximo DOUBLE,
freqMaxima DOUBLE,
PRIMARY KEY (fkComponenteMaquina, fkMaquina)
);

-- Entidade metricas
CREATE TABLE metrica (
idMetrica INT AUTO_INCREMENT,
uso DOUBLE,
frequencia DOUBLE,
fkComponenteMaquina INT,
FOREIGN KEY (fkComponenteMaquina) REFERENCES componenteMaquina(idComponenteMaquina),
fkMaquina INT,
FOREIGN KEY (fkMaquina) REFERENCES maquina(idMaquina),
PRIMARY KEY (idMetrica, fkComponenteMaquina, fkMaquina)
);

-- Entidade alerta
CREATE TABLE alerta (
idAlerta INT AUTO_INCREMENT,
dtAlerta DATETIME,
textoAviso VARCHAR(100),
fkMetrica INT,
FOREIGN KEY (fkMetrica) REFERENCES metrica(idMetrica),
fkComponenteMaquina INT,
FOREIGN KEY (fkComponenteMaquina) REFERENCES componenteMaquina(idComponenteMaquina),
fkMaquina INT,
FOREIGN KEY (fkMaquina) REFERENCES maquina(idMaquina),
PRIMARY KEY (idAlerta, fkMetrica, fkComponenteMaquina, fkMaquina)
);

