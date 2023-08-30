var swiper = new Swiper(".section__proccess-swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
	slidesPerView: 'auto', // показывать по 1 изображению
	spaceBetween: 16,
	mousewheel: false,
  speed: 2000, // Укажите желаемую скорость в миллисекундах
	grabCursor: true, // менять иконку курсора
  });