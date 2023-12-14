const botoes = ['ahsoka', 'anakin', 'rey', 'kylo', 'luke', 'mandalorian', 'maul', 'obi-wan', 'qui-gon', 'vader', 'yoda'];
const imagem = document.querySelector(".flip-card-image");
const container = document.getElementById('container');
const imagem2 = document.querySelector(".flip-card-back .flip-card-image")
const flipCard = document.querySelector(".flip-card-inner");

botoes.forEach(id => {
    const botao = document.getElementById(id);
    botao.addEventListener("click", function() {
        const imgSrc = botao.getAttribute('data-img');
  
        if (imgSrc) {
            imagem.src = `../src/images/front_${imgSrc}`;
        } else {
            imagem.src = `../src/images/front_${id}.jpg`;
        }
        container.style.backgroundImage = `url('../src/images/background_${id}.jpg')`;
        imagem.alt = id;
        imagem2.src = `../src/images/back_${id}.jpg`;

        
        flipCard.style.pointerEvents = 'auto';     
        flipCard.style.display = 'block';
    })
});

const backgroundPadrao = 'background2.jpg';

document.addEventListener("DOMContentLoaded", function() {
    container.style.backgroundImage = `url('../src/images/${backgroundPadrao}')`;

    imagem.src = `../src/images/front_${backgroundPadrao}`;
    imagem2.src = `../src/images/back_${backgroundPadrao}`;

    flipCard.style.pointerEvents = 'none';
    flipCard.style.display = 'none';
});