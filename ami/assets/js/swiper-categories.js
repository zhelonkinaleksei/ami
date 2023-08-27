var swiper = new Swiper(".section__proccess-swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
	slidesPerView: 'auto', // показывать по 1 изображению
	spaceBetween: 16,
	mousewheel: false,
  
	grabCursor: true, // менять иконку курсора
  });