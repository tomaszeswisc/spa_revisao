/* Cria o banco de dados */
CREATE DATABASE atividade_single_page;

/* Seleciona o banco que será utilizado */
USE atividade_single_page;

/* --------------Criar Tabela de Produtos-------------- */

CREATE TABLE produtos(

/* identificador único*/
id INT auto_increment primary key,
/*Nome do Produto*/
nome varchar(100),
/* categoria */
categoria varchar(100),
/*descricao*/
descricao TEXT
);

/* Mostrar os campos da tabela */
describe produtos;

