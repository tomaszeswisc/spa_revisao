//-----------Importar as bibliotecas--------------
//Carregar as variáveis do arquivo . env
require("dotenv").config();
//Importa o Express
const express = require("express");
// Importa o CORS
const cors = require("cors");
//Importar as Rotas
const produtosRoutes = require("./routes/produtosRoutes");

//-----------------------------------------------

//Criar a aplicação utilizando o express
const app = express();

// Permitir receber os dados JSON
app.use(express.json());

//Habilita o CORS
app.use(cors());

//----------------------------------------------

//Servir os arquivos estaticos
app.use(express.static("public"));

//Servir as Rotas

app.use(produtosRoutes);


//--------------------------------------------------------------

//Iniciar o Servidor na porta 3000 
//Tenta iniciar na porta do arquivo .env
//caso porta ocupada usa a porta alternativa
const PORT = process.env.PORT || 5000;  
app.listen(PORT,function(){
    //Exibir menssagem de servidor ativo 
    console.log(`Servidor esta rodando em http://localhost:${PORT}`);
});