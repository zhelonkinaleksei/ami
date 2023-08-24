var swiper = new Swiper(".section__banner-swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
      autoplay: {
  delay: 3000, // Задержка между слайдами в миллисекундах
    disableOnInteraction: false, // Автопроигрывание не останавливается при взаимодействии пользователя
 },
  speed: 1500, // Укажите желаемую скорость в миллисекундах
  
	grabCursor: true, // менять иконку курсора
  });