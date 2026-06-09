console.log("JavaScript carregado com sucesso!");

//Selecionar o Modal
const modalOverlay = document.querySelector('#modalOverlay');

//Selecionar o Boatao Fechar

const btnFechar = document.querySelector('#btnFechar');

//Selecionar os Botões Detalhe

const  botoesDetalhes = document.querySelectorAll(".btnDetalhes");

//Função Abrir Modal

function abrirModal(){

    modalOverlay.style.display = "flex";
}

//Função Fechar Modal

function fecharModal(){

    modalOverlay.style.display = "none";
}


//Adicionar evento ao botão Fechar

btnFechar.addEventListener(

    "click",

    fecharModal

);

//Percorrer os Botoes

botoesDetalhes.forEach(

    function(botao){

        botao.addEventListener(

            "click",

            abrirModal

        );

    }
    
);
