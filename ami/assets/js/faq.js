const accordionItems = document.querySelectorAll('.section__questions-column-item');


accordionItems.forEach(item => {
  const titleInner = item.querySelector('.section__questions-column-item-title');
  const subtitle = item.querySelector('.section__questions-column-item-answer');
  
  titleInner.addEventListener('click', () => {
 
    subtitle.classList.toggle('section__questions-column-item-answer-active');
    titleInner.classList.toggle('section__questions-column-item-title-active');
  });
});