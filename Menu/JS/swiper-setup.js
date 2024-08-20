
// swiper-setup.js

// Espera a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa Swiper
    var swiper = new Swiper('.swiper-container', {
      loop: true, // Permite el bucle infinito
      autoplay: {
        delay: 3000, // Cambia de imagen cada 3 segundos
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true, // Permite hacer clic en la paginación para navegar
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      effect: 'slide', // Efecto de transición
    });
  });
  