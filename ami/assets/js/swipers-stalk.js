// Получаем текущую ширину экрана


// Если ширина экрана больше 992px, инициализируем свайперы

const swipersStalk = document.querySelectorAll(".section__stalk-swiper");

swipersStalk.forEach((swipesStalk) => {
  if (window.innerWidth >= 576) {
    const swiper = new Swiper(swipesStalk, {
      navigation: {
        nextEl: swipesStalk.querySelector(".section__stalk-navigation-next"),
        prevEl: swipesStalk.querySelector(".section__stalk-navigation-prev"),
      },
      slidesPerView: 'auto',
      mousewheel: false,
      grabCursor: true,
    });
  }
});








  