// Функция для плавной прокрутки к якорю
function scrollToAnchor(anchor) {
    const target = document.querySelector(anchor);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
        });
    }
}

// Добавьте обработчики событий для навигационных ссылок
document.querySelector('a[href="#about"]').addEventListener('click', function (e) {
    e.preventDefault(); // Предотвращаем переход по ссылке
    scrollToAnchor('#about'); // Прокручиваем к якорю #about
});

document.querySelector('a[href="#examples"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToAnchor('#examples');
});

document.querySelector('a[href="#contacts"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToAnchor('#contacts');
});


