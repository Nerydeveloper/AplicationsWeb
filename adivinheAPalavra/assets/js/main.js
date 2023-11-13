// Elementos

const divModeGame = document.getElementById("modeGame");

let tempoSegundos = 900;
const setTempDiv = document.getElementById('setTemp');


let sortear = document.getElementById('divProximaLetra');

var parametros = new URLSearchParams(window.location.search);
var parametroRecebido = parametros.get('parametro');






//FUNÇÕES

function nivelGame(parent){
    divModeGame.innerText = parent;
}



function lerArquivoJSON(caminhoArquivo, callback) {
    // Use a função fetch para carregar o arquivo JSON
    fetch(caminhoArquivo)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o arquivo JSON');
            }
            return response.json();
        })
        .then(data => {
            // Chame o callback e passe os dados para ele
            callback(data);
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}

function sortearPalavra(palavras) {
    if (palavras.length === 0) {
        return "A lista de palavras está vazia.";
    }

    const indiceSorteado = Math.floor(Math.random() * palavras.length);
    return palavras[indiceSorteado];
}

//LEMBRETE DE COMO NAVEGAR PELOS DADOS
/*
PEGAR TODOS OS ASSUNTOS = dados.assuntos
PEGAR UM CONJUNTO DE PALAVRAS DE UM ASSUNTO EXPECIFICO = dados.assuntos[indice]
PEGAR O NOME DO ASSUNTO = dados.assuntos[indice].nome
PEGAR AS PALAVRAS DO ASSUNTO = dados.assuntos[indice].palavras
PEGAR UMA PALAVRA EXPECIFICA DO ASSUNTO = dados.assuntos[indice].palavras[indice]
PEGAR O NOME DA PALAVRA EXPECIFICA DO ASSUNTO = dados.assuntos[indice].palavras[indice].nome
PEGAR AS CARACTERISTICAS DA PALAVRA EXPECIFICA DO ASSUNTO = dados.assuntos[indice].palavras[indice].caracteristicas
PEGAR UMA CARACTERISTICA DA PALAVRA EXPECIFICA DO ASSUNTO = dados.assuntos[indice].palavras[indice].caracteristicas.[indice]
*/
/*
    console.log("Assuntos: ", listaAssuntos[0].nome)
    console.log("Palavra: ", listaAssuntos[0].palavras[2].nome)
    console.log("Dicas: ", listaAssuntos[0].palavras[2].caracteristicas)
    console.log("Dica: ", listaAssuntos[0].palavras[2].caracteristicas[1])
*/

/* SORTEANDO UM ASSUNTO */
lerArquivoJSON('../assets/jsons/palavras.json', function (dados) {

    const listaAssuntos = dados.assuntos //Atribuindo os assuntos a const listaAssuntos

    const assunto = sortearPalavra(listaAssuntos) // Sorteando um assunto
    const palavras = sortearPalavra(assunto) // Sorteando uma palavra



    const indiceAssuntoSorteado = listaAssuntos.indexOf(assunto) //pegando o indice sorteado do assunto
    const indicePalavra = listaAssuntos.indexOf(palavras) //pegando o indice sorteado da palavra


    const palavra = dados.assuntos[indiceAssuntoSorteado].palavras[indicePalavra].nome
    console.log("Assunto sorteado foi...: ", assunto.nome)
    console.log("Palavra sorteada foi...: ", palavra)

    

})



function atualizarTempo() {
    if (tempoSegundos === 0) {
        clearInterval(intervalo);
        setTempDiv.textContent = 'Tempo esgotado';
        return;
    }

    tempoSegundos--;

    if (setTempDiv) {
        setTempDiv.textContent = 'Tempo: ' + tempoSegundos + ' segundos';
    } else {
        console.error('Elemento com ID "setTemp" não encontrado.');
    }
}


//AQUI CRIA DIV PARA CADA LETRA DA PALAVRA, APROVEITE PRA ADICIONAR UJMA FUNÇÃO DE SORTEIA PALAVRA
/*
lerArquivoJSON('../assets/jsons/palavras.json', function (dados) {
    var palavraCachorro = dados.assuntos[0].palavras[8].nome;
    console.log(palavraCachorro);
    let divProximaLetra = document.getElementById("divProximaLetra");


});
*/



/* FUNÇÃO PARA VERIFICAR SE A PALAVRA INSERIDA TA CORRETA */
const palavraSecreta = "banana"; // Substitua com sua palavra secreta
const resultadoElement = document.getElementById("resultado");


function verificarPalavra() {
    const inputPalavra = document.getElementById("seuCampoDeEntrada").value.toLowerCase();
    const letrasIguais = [];

    for (let i = 0; i < palavraSecreta.length; i++) {
        if (inputPalavra.includes(palavraSecreta[i])) {
            letrasIguais.push(palavraSecreta[i]);
        }
    }

    if (inputPalavra === palavraSecreta) {
        resultadoElement.textContent = "Você acertou!";
    } else if (letrasIguais.length > 0) {
        resultadoElement.textContent = `Letras em comum: ${letrasIguais.join(", ")}`;
    }
}