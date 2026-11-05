const elemSlides = document.querySelector('.slides');
const elemsImagem = document.querySelectorAll('.slides img');
const elemBotaoEsquerdo = document.querySelector('.esquerda');
const elemBotaoDireito = document.querySelector('.direita');
const dots = document.querySelectorAll('.dot');
const cards = document.querySelectorAll('.card');

let index = 0;

elemBotaoEsquerdo.addEventListener("click", () => {
    index--;

    if(index < 0) index = 10;

    atualizarCarrosel();
})

elemBotaoDireito.addEventListener("click", () => {
    index++;

    if(index > 10) index = 0;

    atualizarCarrosel();
})

const atualizarCarrosel = () => {
    elemSlides.style.transform = `translateX(-${index * 100}%)`

    elemsImagem.forEach(elemsImagem => {
    elemsImagem.classList.remove('active', 'next', 'prev');
    });

    dots.forEach(dot => dot.classList.remove('active'));

    const prevIndex = (index === 0) ? elemsImagem.length - 1 : index - 1;
    const nextIndex = (index === elemsImagem.length - 1) ? 0 : index + 1;   
    
    elemsImagem[index].classList.add('active'); 
    elemsImagem[nextIndex].classList.add('next');    
    elemsImagem[prevIndex].classList.add('prev');  
    dots[index].classList.add('active');


}

dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
        index = idx; 
        atualizarCarrosel(); 
    });
});

