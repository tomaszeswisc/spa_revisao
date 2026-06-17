//Importar o Express, criar Rotas e abrir conexão ao DB
const express = require("express");
const router = express.Router();
const db = require("../db/conexao");

//------------------------ Rotas da API --------------------------------

// ------------ Rota GET - Para listar todos os  produtos -----------------

router.get("/produtos", function(req, res){
    //Comando SQL de busca de produtos 
    const sql ="select * from produtos";

    //Executar a busca 
    db.query(sql, function(erro, resultados){

        //Verificar se ocorreu erro 

        if(erro){
            //Retorna o erro para o Cliente 
            return res.status(500).json({
                erro:"Erro ao buscar produtos"
            });
        }

        //Retorna os produtos encontrados 
        res.status(200).json(resultados);
    });

});

// --------------- Rota GET - Rota Para Buscar produto por ID -----------------

router.get("/produtos/:id", function(req, res){
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

// --------------- Rota POST - Rota para cadastrar um Produto -----------------

router.post("/produtos", function(req, res){
    //cria todas constantes de uma so vez
 
    //Essa linha subistitui o bloco abaixo
    //Isso chama-se Desestruturação de Objetos (Object Destructuring).

    // ------- Forma moderna equivalente -----
    //const {nome, categoria, descrição} = req.body

    //------ Forma tradicional------
    //=====================================
    //Capturar o nome enviado
    const nome = req.body.nome;
    //Capturar a categoria
    const categoria = req.body.categoria;
    //Capturar a descrição
    const descricao = req.body.descricao;
    //======================================

    //Caso prefira a forma moderna comentar essas linhas do bloco
    // e descomentar a linha da forma moderna

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

// ----------- Rota PUT - Rota para atualizar um produto Existente -----------------
//PUT - Atualiza todos os campos do Produto

router.put("/produtos/:id", function(req, res){
    
    //capturar o ID enviado pela URL
    const id = req.params.id;
    
    //Capturar os dados envidos 
    //Capturar o nome enviado
    const nome = req.body.nome;
    //Capturar a categoria
    const categoria = req.body.categoria;
    //Capturar a descrição
    const descricao = req.body.descricao;

    //Comando SQL de atualazação

    const sql = `update produtos set nome = ?, categoria = ?, descricao = ? where id = ?`;

    //Executar a atualização
    db.query(sql, [nome, categoria, descricao, id], function(erro,resultado){
        //Verifica o erro
        if(erro){
            //Retornar mensagem de erro
            return res.status(500).json({
                erro: "Erro ao atualizar o produto"
            });
        }
        //verifica se encontrou algum registro
        if(resultado.affectedRows === 0){
            //Retorna mensagem de não encontrado
            return res.status(404).json({
                menssagem:"Produtdo não encontrado!"
            });
        }
        //Retorna mensagem de sucesso
        res.status(200).json({
            messagem:"Produto atualizado com sucesso!"
        });
    });
});

// --------- Rota PATCH - Rota para atualizar um produto Existente -----------------
// PATCH - Atualiza partes do produto(Parcial)

router.patch("/produtos/:id", function(req, res){
    //capturar o ID enviado pela URL
    const id = req.params.id;
    
    //Capturar os dados envidos 
    //Capturar o nome enviado
    const nome = req.body.nome;
    //Capturar a categoria
    const categoria = req.body.categoria;
    //Capturar a descrição
    const descricao = req.body.descricao;

    //Comando SQL de atualazação

    const sql = `update produtos set 
    nome = ifnull(?,nome), 
    categoria = ifnull(?,categoria), 
    descricao = ifnull(?,descricao) 
    where id = ?`;

    //Executar a atualização
    db.query(sql, [nome, categoria, descricao, id], function(erro,resultado){
        //Verifica o erro
        if(erro){
            //Retornar mensagem de erro
            return res.status(500).json({
                erro: "Erro ao atualizar o produto"
            });
        }
        //verifica se encontrou algum registro
        if(resultado.affectedRows === 0){
            //Retorna mensagem de não encontrado
            return res.status(404).json({
                menssagem:"Produtdo não encontrado!"
            });
        }
        //Retorna mensagem de sucesso
        res.status(200).json({
            messagem:"Produto atualizado parcialmente com sucesso!"
        });
    });
});


// --------- Rota DELETE - Rota para deletar um produto Existente -----------------

router.delete("/produtos/:id", function(req, res){
    //Captura o ID enviado pela URL
    const id = req.params.id;

    //Comando SQL para exclusão
    const sql = "delete from produtos where id = ?";

    //Executa a exclusão
    db.query(sql, [id], function(erro,resultado){
        //verifica erro
        if(erro){

            //Retorna mensagem de erro
            return res.status(500).json({
                erro:"Erro ao excluir produto"
            });
        }
        //verifica se encontrou algum registro
        if(resultado.affectedRows === 0){
            //Retorna mensagem de não encontrado
            return res.status(404).json({
                menssagem:"Produtdo não encontrado!"
            });
        }
        //Retorna mensagem de sucesso
        res.status(200).json({
            messagem:"Produto excluido sucesso!"
        });
    });
    
});

//Exportar as Rotas
module.exports = router;