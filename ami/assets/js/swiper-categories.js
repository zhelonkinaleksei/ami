var swiper = new Swiper(".section__proccess-swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
	slidesPerView: 'auto', // показывать по 1 изображению
	spaceBetween: 16,
	mousewheel: true, // можно прокручивать изображения колёсиком мыши
  
	grabCursor: true, // менять иконку курсора
  });