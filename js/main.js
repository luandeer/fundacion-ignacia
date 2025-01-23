
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
  const carouselAsilo = document.querySelector('.carouselAsiloLima');
  if (carouselAsilo) {
    new Swiper('.carouselAsiloLima', {
      loop: false,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      // pagination: {
      //   el: '.swiper-pagination-vidas',
      //   clickable: true,
      // },
      // navigation: {
      //   nextEl: '.custom-next-historia',
      //   prevEl: '.custom-prev-historia',
      //   disabledClass: 'swiper-button-disabled',
      // },
      breakpoints: {
        0: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1.8,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2.8,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 3.8,
          spaceBetween: 40,
        }


      },
      effect: 'slide',
      centeredSlides: false,
    });
  }

  const carruselAsiloBeneficiarios = document.querySelector('.carouselAsiloBeneficiarios');
  if (carruselAsiloBeneficiarios) {
    new Swiper('.carouselAsiloBeneficiarios', {
      loop: false,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination-beneficiarios-asilo',
        clickable: true,
      },
      navigation: {
        nextEl: '.custom-next-historia-beneficiarios-asilo',
        prevEl: '.custom-prev-historia-beneficiarios-asilo',
        disabledClass: 'swiper-button-disabled',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },

        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 40,
        }


      },
      effect: 'slide',
      centeredSlides: false,
    });
  }

  const carruselDestacadosImpactoo = document.querySelector('.carouselDestacadosImpacto');
  if (carruselDestacadosImpactoo) {
    new Swiper('.carouselDestacadosImpacto', {
      loop: false,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination-destacados-impacto',
        clickable: true,
      },
      navigation: {
        nextEl: '.custom-next-historia-destacados-impacto',
        prevEl: '.custom-prev-historia-destacados-impacto',
        disabledClass: 'swiper-button-disabled',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },

        1024: {
          slidesPerView: 1.8,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 2,
          spaceBetween: 40,
        }


      },
      effect: 'slide',
      centeredSlides: false,
    });
  }

  const carruselActividad = document.querySelector('.carruselActividad');
  if (carruselActividad) {
    new Swiper('.carruselActividad', {
      loop: false,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination-actividad-evento',
        clickable: true,
      },
      navigation: {
        nextEl: '.custom-next-historia-actividad-evento',
        prevEl: '.custom-prev-historia-actividad-evento',
        disabledClass: 'swiper-button-disabled',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 40,
        }


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


/* Select personalizado solo con nombres */
/* Select personalizado solo con nombres */
document.addEventListener("DOMContentLoaded", () => {
  const selectContainers = document.querySelectorAll(".unique-select-container");

  // JSON de países
  const countries = [
    { "nombre": "Persona Natural" },
    { "nombre": "Personal Juridica" },

  ];

  selectContainers.forEach((container) => {
    const trigger = container.querySelector(".unique-select-trigger");
    const optionsList = container.querySelector(".unique-select-options");
    const hiddenInput = container.querySelector("input[type='hidden']");
    const display = trigger.querySelector(".unique-select-display");

    // Función para generar las opciones
    const generateOptions = () => {
      optionsList.innerHTML = ''; // Limpiar las opciones actuales
      countries.forEach((country) => {
        const option = document.createElement('li');
        option.classList.add('unique-select-option', 'px-4', 'py-2', 'hover:bg-[#EEEEEE]', 'cursor-pointer', 'text-[16px]', 'text-black');
        option.textContent = country.nombre;
        optionsList.appendChild(option);

        // Agregar evento de selección
        option.addEventListener("click", () => {
          const selectedName = country.nombre;

          // Actualiza la visualización del botón
          display.textContent = selectedName;

          // Establecer el valor oculto
          hiddenInput.value = selectedName;

          // Cierra el menú
          optionsList.classList.add("hidden");
        });
      });
    };

    // Inicializar el select con las opciones generadas
    generateOptions();

    // Abre o cierra el menú al hacer clic en el botón
    trigger.addEventListener("click", () => {
      optionsList.classList.toggle("hidden");
    });

    // Cierra el menú al hacer clic fuera del contenedor
    document.addEventListener("click", (event) => {
      if (!container.contains(event.target)) {
        optionsList.classList.add("hidden");
      }
    });
  });
});
