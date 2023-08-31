const sliderQuiz = new Swiper('.section__quiz-swiper', { 
  // задаем параметры
  mousewheel: false,
  pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
  },
  navigation: {
      nextEl: ".section__quiz-navigation-next",
      prevEl: ".section__quiz-navigation-prev",
  },
  // ... другие параметры
  on: {
    slideChange: function () {
        currentSlideIndex = sliderQuiz.realIndex + 1; // Обновляем текущий индекс слайда
        updateSlideCounter(); // Обновляем счетчик слайдов
    }
},
  effect: 'fade', 
  grabCursor: false, // менять иконку курсора
});


let isAnswerGiven = false;
// Получение всех необходимых элементов

const quiz = document.querySelector('.section__quiz');
const prevButton = quiz.querySelector('.section__quiz-navigation-prev');
const nextButton = quiz.querySelector('.section__quiz-navigation-next');
const slideImgs = quiz.querySelectorAll('.section__quiz-slide-img');
const checkboxes = quiz.querySelectorAll('.custom-checkbox input[type="checkbox"]');
const radioButtons = quiz.querySelectorAll('.custom-checkbox input[type="radio"]');
const slides = quiz.querySelectorAll('.section__quiz-slide');

let currentSlideIndex = 0;

// Скрываем кнопку "Назад" на первом слайде
prevButton.style.display = 'none';

// Функция для обновления счетчика слайдов
function updateSlideCounter() {
  const activeSlide = quiz.querySelector('.swiper-slide-visible');
  const slideNumber = Array.from(slides).indexOf(activeSlide) + 1;
  quiz.querySelector('.section__quiz-nav-left-active').textContent = slideNumber;
}

// Функция для отображения определенного слайда
function showSlide(index) {
    // Проверка, нужно ли показать кнопку "Назад"
    if (index === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
    }


    // Обновление счетчика
    updateSlideCounter();

    // Блокировка/разблокировка кнопки "Далее"
    if (index === slides.length - 1) {
        nextButton.classList.remove('section__quiz-navigation-next-disable');
    } else {
        nextButton.classList.add('section__quiz-navigation-next-disable');
    }
}

// Обработчики событий для кликов по изображениям
slideImgs.forEach((img) => {
    img.addEventListener('click', () => {
        // Убрать класс у всех изображений
        slideImgs.forEach((img) => {
            img.classList.remove('section__quiz-slide-img-checked');
            img.classList.add('section__quiz-slide-img-disable');
        });
        // Добавить класс выбранному изображению
        img.classList.remove('section__quiz-slide-img-disable');
        img.classList.add('section__quiz-slide-img-checked');

        // Разблокировать кнопку "Далее"
        nextButton.classList.remove('section__quiz-navigation-next-disable');
    });
});

// Обработчики событий для чекбоксов и радио кнопок
function handleCheckboxChange() {

    // Разблокировать кнопку "Далее"
    nextButton.classList.remove('section__quiz-navigation-next-disable');
}

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckboxChange);
});

radioButtons.forEach((radio) => {
    radio.addEventListener('change', handleCheckboxChange);
});



// Получение элементов
const inputFile = document.querySelector('.section__quiz-slide-files-input-standart');
const customFileInput = document.querySelector('.section__quiz-slide-files-input-custom');
const imageContainer = document.querySelector('.section__quiz-slide-files-img');

// Обработчик события изменения в поле загрузки файла
inputFile.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        // Очистка контейнера перед вставкой нового изображения
        imageContainer.innerHTML = '';

        // Создание элемента изображения и добавление его в контейнер
        const image = document.createElement('img');
        image.src = URL.createObjectURL(file);
        image.alt = 'Загруженное изображение';
        imageContainer.appendChild(image);
    }
});

// Обработчик клика на кастомный инпут
customFileInput.addEventListener('click', () => {
    inputFile.click();
});

// Обработчик клика на кнопку "Далее"
nextButton.addEventListener('click', () => {
  currentSlideIndex++;
  showSlide(currentSlideIndex);

  // Проверка, если это последний вопрос, скрыть объект с классом section__quiz-nav
  if (currentSlideIndex === 5) {
      document.querySelector('section__quiz-nav').style.display = 'none';
      document.querySelector('section__quiz-left-title').style.display = 'none';
      document.querySelector('section__quiz-right').style.display = 'none';
      document.querySelector('section__quiz-left-title-end').style.display = 'block';
      document.querySelector('section__quiz-right-end').style.display = 'block';
  }
  if (currentSlideIndex === 4) {
    nextButton.classList.remove('section__quiz-navigation-next-disable');
}
});



const sliderQuizOther = new Swiper('.section__quiz-swiper-other', { 
    // задаем параметры
    mousewheel: false,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".section__quiz-navigation-next",
        prevEl: ".section__quiz-navigation-prev",
    },
    // ... другие параметры
    on: {
      slideChange: function () {
          currentSlideIndex1 = sliderQuizOther.realIndex + 1; // Обновляем текущий индекс слайда
          updateSlideCounter1(); // Обновляем счетчик слайдов
      }
  },
    effect: 'fade', 
    grabCursor: false, // менять иконку курсора
  });



const quiz1 = document.querySelector('.section__quiz-swiper-other');
const prevButton1 = quiz1.querySelector('.section__quiz-navigation-prev');
const nextButton1 = quiz1.querySelector('.section__quiz-navigation-next');
const slideImgs1 = quiz1.querySelectorAll('.section__quiz-slide-other-item');
const slides1 = quiz1.querySelectorAll('.section__quiz-slide-other');

let currentSlideIndex1 = 0;

// Скрываем кнопку "Назад" на первом слайде
prevButton1.style.display = 'none';

// Функция для обновления счетчика слайдов
function updateSlideCounter1() {
  const activeSlide1 = quiz1.querySelector('.swiper-slide-visible');
  const slideNumber1 = Array.from(slides1).indexOf(activeSlide1) + 1;
  quiz1.querySelector('.section__quiz-nav-left-active').textContent = slideNumber1;
}

// Функция для отображения определенного слайда
function showSlide1(index) {
    // Проверка, нужно ли показать кнопку "Назад"
    if (index === 0) {
        prevButton1.style.display = 'none';
    } else {
        prevButton1.style.display = 'block';
    }


    // Обновление счетчика
    updateSlideCounter1();

    // Блокировка/разблокировка кнопки "Далее"
    if (index === slides.length - 1) {
        nextButton1.classList.remove('section__quiz-navigation-next-disable');
    } else {
        nextButton1.classList.add('section__quiz-navigation-next-disable');
    }
}

// Обработчики событий для кликов по изображениям
slideImgs1.forEach((img1) => {
    img1.addEventListener('click', () => {
        // Убрать класс у всех изображений
        slideImgs1.forEach((img1) => {
            img1.classList.remove('section__quiz-slide-other-item-checked');
        });
        // Добавить класс выбранному изображению
        img1.classList.add('section__quiz-slide-other-item-checked');

        // Разблокировать кнопку "Далее"
        nextButton1.classList.remove('section__quiz-navigation-next-disable');
    });
});

nextButton1.addEventListener('click', () => {
    currentSlideIndex1++;
    showSlide1(currentSlideIndex);
  
  
  });
  
