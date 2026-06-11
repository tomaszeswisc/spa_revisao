/*-----------Importar as bibliotecas--------------*/
/*Importa o Express*/
const express = require("express");
/*Importa o MYSQL2 */
const mysql = require("mysql2");
/* Importa o CORS*/
const cors = require("cors");

/*-----------------------------------------------*/

/*Criar a aplicação utilizando o express*/
const app = express();

/* Permitir receber os dados JSON*/
app.use(express.json());

/*Habilita o CORS*/
app.use(cors());

/*----------------------------------------------*/

/*Servir os arquivos estaticos*/
app.use(express.static("public"));

/*---------------------------------------------*/

/*Conexão com Banco de Dados*/

const db = mysql.createConnection({
    /*Endereço do servidor*/
    host:"localhost",
    /*Usuario do banco de dados*/
    user:"root",
    /*senha do Banco de Dados*/
    password:"123456",
    /*Nome do Banco de Dados*/
    database:"atividade_single_page"
});

/*Teste de Conexão */
db.connect(function(erro){
    /*Verifica erro*/
    if(erro){
        /*Exibe erro no terminal*/
        console.log("Erro ao conectar ao banco:", erro);
        return;
    }
    /*Exibe mensagem de sucesso*/
    console.log("Conectado ao Banco de Dados MySQL!");
    
});

/*--------------------------------------------------------------*/

/*Iniciar o Servidor na porta 3000 */
app.listen(3000,function(){
    /*Exibir menssagem de servidor ativo */
    console.log("Servidor esta rodando em http://localhost:3000");
});