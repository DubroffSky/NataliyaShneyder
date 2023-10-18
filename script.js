function scrollToAnchor(anchor) {
    const target = document.querySelector(anchor);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
        });
    }
}

//обработчики событий для навигационных ссылок
document.querySelector('a[href="#about"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToAnchor('#about');
});

document.querySelector('a[href="#examples"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToAnchor('#examples');
});

document.querySelector('a[href="#contacts"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToAnchor('#contacts');
});


