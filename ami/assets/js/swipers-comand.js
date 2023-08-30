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
      speed: 2000, // Укажите желаемую скорость в миллисекундах
      navigation: {
        nextEl: swiperContainer.querySelector(".slide__doctors-swiper-navigation-next"),
        prevEl: swiperContainer.querySelector(".slide__doctors-swiper-navigation-prev"),
      },
      slidesPerView:'auto',
      mousewheel: false,
      grabCursor: true,
    });
  });

}
if (screenWidth < 992) {
  $('.section__comand-tabs').each(function() {
    $(this).slick({
      slidesToShow: 1,
      variableWidth: true,
      infinite: false,
      // Другие опции
    });
  });
}





// Получаем текущую ширину экрана



  const swiperContainers1 = document.querySelectorAll(".slide__doctors-swiper");

  swiperContainers1.forEach((swiperContainer1) => {
    const swiper = new Swiper(swiperContainer1, {
      pagination: {
        el: ".swiper-pagination",
      },
      speed: 2000, // Укажите желаемую скорость в миллисекундах
      slidesPerView:'auto',
      mousewheel: false,
      grabCursor: true,
    });
  });




  