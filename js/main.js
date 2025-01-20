
function initSwiperTabs() {
  let swiperTab, swiper;
  if (!swiperTab && !swiper) { // Verifica si los Swipers ya están inicializados
    swiperTab = new Swiper(".mySwiperTab", {
      direction: 'vertical', // Establece la dirección vertical

      slidesPerView: "auto",
      spaceBetween: 0,
      // freeMode: true,
      autoplay: {
        delay: 3000, // Tiempo entre cada deslizamiento (en milisegundos)
        disableOnInteraction: false, // No desactiva el autoplay si interactúas con el Swiper
      },
    });

    swiper = new Swiper(".ContentHomeBeneficios", {
      direction: 'vertical', // Establece la dirección vertical

      spaceBetween: 0,
      thumbs: {
        swiper: swiperTab,
      },
      autoplay: {
        delay: 3000, // Tiempo entre cada deslizamiento (en milisegundos)
        disableOnInteraction: false, // No desactiva el autoplay si interactúas con el Swiper
      },
    });

    swiper.on("slideChangeTransitionStart", function () {
      swiperTab.slideTo(swiper.activeIndex);
    });
  }
}
//
function initCarousels() {
  // Carrusel Home Banner
  const transformandoVidas = document.querySelector('.carouselVidasindex');
  if (transformandoVidas) {
    new Swiper('.carouselVidasindex', {
      loop: false,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination-vidas',
        clickable: true,
      },
      // navigation: {
      //   nextEl: '.custom-next-historia',
      //   prevEl: '.custom-prev-historia',
      //   disabledClass: 'swiper-button-disabled',
      // },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },

        1024: {
          slidesPerView: 2,
          spaceBetween: 10,
        },


      },
      effect: 'slide',
      centeredSlides: false,
    });
  }


  const carouselBeneficiariosMovil = document.querySelector('.carouselMovilBeneficiarios');
  if (carouselBeneficiariosMovil) {
    new Swiper('.carouselMovilBeneficiarios', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: false,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next-beneficiarios',
        prevEl: '.swiper-button-prev-beneficiarios',
        disabledClass: 'swiper-button-disabled',
      },
      pagination: {
        el: '.swiper-pagination-beneficiarios', // Elemento para la paginación
        type: 'fraction', // Cambiar el tipo de paginación a fracción
        formatFractionCurrent: function (number) {
          return number < 10 ? `0${number}` : number; // Agrega un 0 para números menores a 10
        },
        formatFractionTotal: function (number) {
          return number < 10 ? `0${number}` : number; // Agrega un 0 para el total si es menor a 10
        },

      },
      // navigation: {
      //   nextEl: '.custom-next-historia',
      //   prevEl: '.custom-prev-historia',
      //   disabledClass: 'swiper-button-disabled',
      // },

      effect: 'slide',
      centeredSlides: false,
    });
  }















}


document.addEventListener('DOMContentLoaded', () => {
  // Cambia el fondo del header si existe
  initCarousels();
  initSwiperTabs();

});