const dropInnerItems = document.querySelectorAll('.head__drop-inner');

// Добавьте обработчики событий для наведения и ухода мыши
dropInnerItems.forEach(item => {
    const headDrop = item.querySelector('.head__drop');
    const dropList = item.querySelector('.drop__list');

    item.addEventListener('mouseenter', function () {
        headDrop.classList.add('head__drop-active');
        dropList.classList.add('drop__list-active');
    });

    item.addEventListener('mouseleave', function () {
        headDrop.classList.remove('head__drop-active');
        dropList.classList.remove('drop__list-active');
    });
});