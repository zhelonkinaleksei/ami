// Получаем текущую ширину экрана
const screenWidth = window.innerWidth;

// Если ширина экрана больше 992px, инициализируем свайперы
if (screenWidth > 992) {
  const swiperContainers = document.querySelectorAll(".section__comand-tab-content");

  swiperContainers.forEach((swiperContainer) => {
    const swiper = new Swiper(swiperContainer, {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: swiperContainer.querySelector(".slide__doctors-swiper-navigation-next"),
        prevEl: swiperContainer.querySelector(".slide__doctors-swiper-navigation-prev"),
      },
      slidesPerView:'auto',
      mousewheel: true,
      grabCursor: true,
    });
  });
}


  $('.section__comand-tabs').slick({
    slidesToShow: 'auto',
    variableWidth: true,

  });


// Получаем текущую ширину экрана



  const swiperContainers1 = document.querySelectorAll(".slide__doctors-swiper");

  swiperContainers1.forEach((swiperContainer1) => {
    const swiper = new Swiper(swiperContainer1, {
      pagination: {
        el: ".swiper-pagination",
      },

      slidesPerView:'auto',
      mousewheel: true,
      grabCursor: true,
    });
  });




  