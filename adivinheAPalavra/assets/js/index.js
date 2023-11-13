


function f_selectNivel() {
    // Obtenha uma coleção de elementos de input do tipo "radio" com o atributo name igual a "btn divSelectedNivel"
    var radioInputs = document.querySelectorAll('input[type="radio"][name="btn divSelectedNivel"]');

    // Inicialize uma variável para armazenar o valor selecionado
    var valorSelecionado = null;

    // Itere sobre os elementos de input do tipo "radio"
    radioInputs.forEach(function (input) {
        if (input.checked) {
            valorSelecionado = input.value;
        }
    });
    // Verifique se algum valor foi selecionado e, em seguida, use-o
    if (valorSelecionado !== null) {
        console.log("Valor selecionado: " + valorSelecionado);
    } else if (valorSelecionado == "FÁCIL") {
        // arquivo1.js
        document.cookie = 0
    } else if (valorSelecionado == "MODERADO") {
        document.cookie = 1
    } else if (valorSelecionado == "DIFÍCIL") {
        document.cookie = 2
    }
    window.location.href = "templates/main.html?parametro=" + encodeURIComponent(valorSelecionado);

}

document.getElementById("seuCampoDeEntrada").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {

        //verificar se a palavra inserida é igual a palavra sorteada
        //se for: informar que ele(a) ganhou
        //se não for: informar que errou
        // se a quantidade de tentativas for tamanho da palavra menos um,
        // informe que ele perdeu. Nese caso de a opção de sortear nova palavra
        f_selectNivel();
    }
});

