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
    slidesPerView:'auto',
    mousewheel: false,
    grabCursor: true,
  });
});