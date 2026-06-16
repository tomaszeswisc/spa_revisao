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


/*------------------------ Rotas para teste --------------------------------*/
/* Rota GET para Listar os Produtos */

app.get("/produtos", function(req, res){
    /*Comando SQL de busca de produtos */
    const sql ="select * from produtos";

    /*Executar a busca */
    db.query(sql, function(erro, resultados){

        /*Verificar se ocorreu erro */

        if(erro){
            /*Retorna o erro para o Cliente */
            return res.status(500).json({
                erro:"Erro ao buscar produtos"
            });
        }

        /*Retorna os produtos encontrados */
        res.status(200).json(resultados);
    });

});

// --------------- Rota Para Buscar produto por ID -----------------
//Rota GET para buscar um produto específico

app.get("/produtos/:id", function(req, res){
    //Capturar o id envidado pela URL
    const id = req.params.id;
    //Comando SQL filtrando pelo ID
    const sql = "select * from produtos where id = ?";
    //Executat a consulta
    db.query(sql, [id], function(erro, resultados){
        //verifica erro
        if(erro){
            //Retorna erro para o cliente
            return res.status(500).json({
                erro:"Erro ao buscar o produto"
            });
        }
        //verifica se encontrou algum registro
        if(resultados.length === 0){
            //Retorna mensagem de não encontrado
            return res.status(404).json({
                menssagem:"Produtdo não encontrado!"
            });
        }
        //Retorna o produto encontrado
        res.status(200).json(resultados[0]);
    });
});


//------------ Cadastrar Produto ----------------

app.post("/produtos", function(req, res){
    //cria todas constantes de uma so vez
 
    //const {nome, categoria, descrição} = req.body

    //Capturar o nome enviado
    const nome = req.body.nome;
    //Capturar a categoria
    const categoria = req.body.categoria;
    //Capturar a descrição
    const descricao = req.body.descricao;

    //Criar o SQL de inserção
    const sql = `insert into produtos (nome, categoria, descricao) values(?,?,?)`;
    //Executar o cadastro
    db.query(sql, [nome, categoria, descricao], function(erro, resultado){
        //verifica o erro
        if(erro){
            //Retorna erro para o cliente
            return res.status(500).json({
                erro: "Erro ao cadastrar o produto"
            });
        }
    //Retorna mensagem de sucesso
        res.status(201).json({
            menssagem:"Produto cadastrado com sucesso!",
            id:resultado.insertId
        });
    });
});