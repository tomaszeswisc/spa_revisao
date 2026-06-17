//Carregar as variaveis do arquivo .env
require('dotenv').config();
//Importar a biblioteca mysql2
const mysql = require("mysql2");

//Criar a conexão com o Banco de Dados
const db = mysql.createConnection({
    host: process.env.DB_HOST, //Endereço do Servidor
    user: process.env.DB_USER, // Usuario do Banco de Dados
    password: process.env.DB_PASSWORD,// Senha do Banco de Dados
    database: process.env.DB_NAME // Nome do Banco de Dados
});


//Teste de conexão

db.connect(function(erro){
    //Verifica erro
    if(erro){
        console.log("Erro ao conectar ao banco:", erro);
        return;
    }
    //Exibir mensagem de sucesso
    console.log("Conectado ao Bando de Dados MySQL!")
});

//Exportar a conexão
module.exports = db;