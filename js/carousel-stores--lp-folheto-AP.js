// Seleciona os elementos de navegação e o carrossel
const scrollLeftButton = document.getElementById('scrollLeft--lp-folheto-AP');
const scrollRightButton = document.getElementById('scrollRight--lp-folheto-AP');
const carousel = document.getElementById('lp-folheto-AP--carousel-itens');

// Função para rolar o carrossel para a esquerda
scrollLeftButton.addEventListener('click', () => {
  carousel.scrollBy({
    left: -carousel.clientWidth, // Rola a largura visível do carrossel para a esquerda
    behavior: 'smooth' // Anima a rolagem
  });
});

// Função para rolar o carrossel para a direita
scrollRightButton.addEventListener('click', () => {
  carousel.scrollBy({
    left: carousel.clientWidth, // Rola a largura visível do carrossel para a direita
    behavior: 'smooth' // Anima a rolagem
  });
});

// // Função para ocultar as setas quando necessário (opcional)
// function checkScrollPosition() {
//   const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

//   // Oculta a seta da esquerda se já estivermos no início
//   if (carousel.scrollLeft <= 0) {
//     scrollLeftButton.style.display = 'none';
//   } else {
//     scrollLeftButton.style.display = 'block';
//   }

//   // Oculta a seta da direita se já estivermos no fim
//   if (carousel.scrollLeft >= maxScrollLeft) {
//     scrollRightButton.style.display = 'none';
//   } else {
//     scrollRightButton.style.display = 'block';
//   }
// }

// // Verifica a posição da rolagem sempre que o carrossel for rolado
// carousel.addEventListener('scroll', checkScrollPosition);

// // Inicializa a verificação da posição
// checkScrollPosition();
