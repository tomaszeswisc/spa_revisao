console.log("JavaScript carregado com sucesso!");

//Selecionar o Modal
const modalOverlay = document.querySelector('#modalOverlay');

//Selecionar o Boatao Fechar

const btnFechar = document.querySelector('#btnFechar');

//Selecionar os Botões Detalhe

const  botoesDetalhes = document.querySelectorAll(".btnDetalhes");

//Função Abrir Modal

function abrirModal(){

    /* Mostra o Modal */
    modalOverlay.style.display = "flex";
}

//Função Fechar Modal

function fecharModal(){

    /* Oculta o Modal */
    modalOverlay.style.display = "none";

}


//Adicionar evento ao botão Fechar

btnFechar.addEventListener(

    "click",

    fecharModal

);


//Percorrer todos Botoes

/*forEach - Percorre todos os botoes existentes */
botoesDetalhes.forEach(

    function(botao){

        botao.addEventListener(

            "click",

            abrirModal

        );

    }

);

// Fechar ao clicar Fora do Modal

/* Adiciona um evento de clique ao fundo do modal (overlay) */
modalOverlay.addEventListener(

    "click",

    function(evento){

    /* Verifica se o clique foi realizado diretamente no overlay
e não em algum elemento dentro do modal */

    if(evento.target === modalOverlay){ 

    /* Fecha o modal */
    
    fecharModal();

        }

    }

);