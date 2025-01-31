


//accordion responsive



//menu responsive
// Función para inicializar el menú
function initResponsiveMenu() {
  const btnMenu = document.getElementById("btn_menu");
  const menuResponsive = document.getElementById("menu-responsive");

  if (btnMenu && menuResponsive) {
    btnMenu.addEventListener("change", function () {
      if (btnMenu.checked) {
        showMenu(menuResponsive);
      } else {
        hideMenu(menuResponsive);
      }
    });
  }
}

function showMenu(menu) {
  menu.classList.add("open"); // Abre el menú añadiendo la clase 'open'
  document.body.classList.add("overflow-hidden"); // Evitar desplazamiento detrás del menú
}

function hideMenu(menu) {
  menu.classList.remove("open"); // Cierra el menú quitando la clase 'open'
  document.body.classList.remove("overflow-hidden"); // Permitir desplazamiento
}

function toggleSubmenu(event) {
  const submenu = event.target.nextElementSibling; // Obtiene el siguiente elemento (el submenu)
  submenu.classList.toggle("open"); // Alterna la visibilidad del submenu
}

// Inicializar el menú responsive
initResponsiveMenu();



//modal

(() => {
  function toggleModal(modalId, action) {
    const modal = document.getElementById(modalId);
    if (modal) {
      if (action === "open") {
        modal.classList.remove("hidden");
        modal.style.display = "flex";
      } else if (action === "close") {
        modal.classList.add("hidden");
        modal.style.display = "none";
      }
    }
  }

  function initializeModal() {
    document.querySelectorAll(".open-modal").forEach(button => {
      button.addEventListener("click", () => {
        const modalId = button.getAttribute("data-modal");
        toggleModal(modalId, "open");
      });
    });

    document.querySelectorAll(".close-modal").forEach(button => {
      button.addEventListener("click", () => {
        const modalId = button.getAttribute("data-modal");
        toggleModal(modalId, "close");
      });
    });

    window.addEventListener("click", (e) => {
      document.querySelectorAll(".modal").forEach(modal => {
        if (e.target === modal) {
          modal.classList.add("hidden");
          modal.style.display = "none";
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", initializeModal);
})();

(() => {
  let images = [
    "https://cdn.pixabay.com/photo/2020/05/25/14/19/classic-5218823_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/10/02/06/42/blackout-7492849_1280.png",
    "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/05/25/14/19/classic-5218823_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/25/14/19/classic-5218823_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/25/14/19/classic-5218823_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/25/14/19/classic-5218823_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/25/14/19/classic-5218823_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/25/14/19/classic-5218823_960_720.jpg",
    // Agrega más imágenes si es necesario
  ];

  function imageSlider(parent, images) {
    let currentImage = 0;

    let slider = {
      parent: parent,
      images: parent.querySelector(".images"),
      thumbnails: parent.querySelector(".thumbnails"),
      backBtn: parent.querySelector(".back-btn .custom-prev"),
      nextBtn: parent.querySelector(".next-btn .custom-next"),
      imageIndex: parent.querySelector(".image-index"),  // Nuevo elemento para el numeral
    };

    // Insertar imágenes grandes
    slider.images.innerHTML = images.map(image => `<img src="${image}" />`).join("");
    let imageNodes = slider.images.querySelectorAll("img");
    imageNodes[currentImage].classList.add("active");

    // Insertar miniaturas
    slider.thumbnails.innerHTML = images.map(image => `<img src="${image}" />`).join("");
    let thumbnailNodes = slider.thumbnails.querySelectorAll("img");
    thumbnailNodes[currentImage].classList.add("active");

    // Función para actualizar el numeral
    function updateImageIndex() {
      slider.imageIndex.textContent = `${currentImage + 1}/${images.length}`;
    }

    // Actualizar el numeral al inicio
    updateImageIndex();

    // Desplazar miniaturas
    function scrollToThumbnail(index) {
      const activeThumbnail = thumbnailNodes[index];
      const thumbnailContainer = slider.thumbnails;

      const containerRightEdge = thumbnailContainer.scrollLeft + thumbnailContainer.offsetWidth;
      const thumbnailRightEdge = activeThumbnail.offsetLeft + activeThumbnail.offsetWidth;

      if (thumbnailRightEdge > containerRightEdge) {
        thumbnailContainer.scrollTo({
          left: thumbnailRightEdge - thumbnailContainer.offsetWidth,
          behavior: "smooth",
        });
      } else if (activeThumbnail.offsetLeft < thumbnailContainer.scrollLeft) {
        thumbnailContainer.scrollTo({
          left: activeThumbnail.offsetLeft,
          behavior: "smooth",
        });
      }
    }

    // Clic en miniaturas
    thumbnailNodes.forEach((thumbnail, i) => {
      thumbnail.addEventListener("click", () => {
        imageNodes[currentImage].classList.remove("active");
        slider.thumbnails.querySelector("img.active").classList.remove("active");
        currentImage = i;
        imageNodes[currentImage].classList.add("active");
        thumbnail.classList.add("active");

        scrollToThumbnail(currentImage);
        updateImageIndex();  // Actualizar numeral
      });
    });

    // Botón "Atrás"
    slider.backBtn.addEventListener("click", () => {
      imageNodes[currentImage].classList.remove("active");
      currentImage = (currentImage - 1 + images.length) % images.length;
      imageNodes[currentImage].classList.add("active");
      slider.thumbnails.querySelector("img.active").classList.remove("active");
      thumbnailNodes[currentImage].classList.add("active");

      scrollToThumbnail(currentImage);
      updateImageIndex();  // Actualizar numeral
    });

    // Botón "Siguiente"
    slider.nextBtn.addEventListener("click", () => {
      imageNodes[currentImage].classList.remove("active");
      currentImage = (currentImage + 1) % images.length;
      imageNodes[currentImage].classList.add("active");
      slider.thumbnails.querySelector("img.active").classList.remove("active");
      thumbnailNodes[currentImage].classList.add("active");

      scrollToThumbnail(currentImage);
      updateImageIndex();  // Actualizar numeral
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    imageSlider(document.querySelector(".image-slider"), images);
  });
})();


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

function toggleSubmenu(event) {
  event.preventDefault(); // Prevenir el comportamiento por defecto del enlace

  // Obtener el botón clickeado y el submenú
  const button = event.currentTarget;
  const submenu = button.nextElementSibling; // Seleccionamos el siguiente hermano (el submenú)
  const iconRotate = button.querySelector(".icon-rotate"); // El icono dentro del botón

  // Alternar visibilidad del submenú y la rotación del icono
  submenu.classList.toggle("hidden"); // Alternar clase para mostrar/ocultar el submenú
  iconRotate.classList.toggle("rotate-90"); // Alternar rotación del ícono
}



