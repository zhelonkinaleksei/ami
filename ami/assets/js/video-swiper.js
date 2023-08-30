const swiperVideos = document.querySelectorAll(".section__video-tab-content");

swiperVideos.forEach((swiperVideo) => {
  const swiper = new Swiper(swiperVideo, {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: swiperVideo.querySelector(".slide__doctors-swiper-navigation-next"),
      prevEl: swiperVideo.querySelector(".slide__doctors-swiper-navigation-prev"),
    },
    speed: 2000, // Укажите желаемую скорость в миллисекундах
    slidesPerView:'auto',
    mousewheel: false,
    grabCursor: true,
  });
});