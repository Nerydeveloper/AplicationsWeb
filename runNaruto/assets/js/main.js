// Set get divs

const naruto = document.querySelector(".narutoAndando");
const montanha = document.querySelector(".obstl01");

// FUNÇÕES

const jump = () => {
    //Adiciona a classe jump a div do personagem
    naruto.classList.add('jump');

    //Definir uma ação e um tempo para parar
    setTimeout(() => {
        // Ação de remover a classe jump
        naruto.classList.remove('jump');
    }, 500); //Definindo um tempo para a ação ser execultada

}

const loop = setInterval(()=>{
    const montanhaPosition = montanha.offsetLeft; //posição da montanha
    const narutoPosition = +window.getComputedStyle(naruto).bottom.replace('px',''); //posição do personagem

    // Contições para parar o jogo
    if (montanhaPosition <= 66 && montanhaPosition > 0 && narutoPosition <= 100) {

        //Setando a animação da montanha para none
        montanha.style.animation = 'none';
        //Setando a posição final da montanha para onde o personagem tocou nela
        montanha.style.left = `${montanhaPosition}px`;

        //Setando a animação do personagem para none
        naruto.style.animation = 'none';
        //Setando a posição do personagem para onde ele tocou na montanha
        naruto.style.bottom = `${narutoPosition}px`;
        //Mudando a imagem do personagem
        naruto.src = '../assets/midias/gifs/game-over.gif'
        //Ajustando sua posição final
        naruto.style.marginLeft = '-1px'
    }
},10);


//EVENTOS
document.addEventListener('keydown', jump);
