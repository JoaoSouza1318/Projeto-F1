const elemSlides = document.querySelector('.slides');
const elemsImagem = document.querySelectorAll('.slides img');
const elemBotaoEsquerdo = document.querySelector('.esquerda');
const elemBotaoDireito = document.querySelector('.direita');

let index = 0;

elemBotaoEsquerdo.addEventListener("click", () => {
    index--;

    if(index < 0) index = elemsImagem.length -1;

    atualizarCarrosel();
})

elemBotaoDireito.addEventListener("click", () => {
    index++;

    if(index > elemsImagem.length -1) index = 0;

    atualizarCarrosel();
})

const atualizarCarrosel = () => {
    elemSlides.style.transform = `translateX(-${index * 100}%)`
}