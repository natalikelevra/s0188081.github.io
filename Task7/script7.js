// Ждем, пока весь DOM будет загружен
document.addEventListener('DOMContentLoaded', function () {
    // Инициализируем новый экземпляр Swiper после загрузки DOM
    const swiper = new Swiper('.card-wrapper', {
        loop: true, // Включаем бесконечный цикл слайдов
        spaceBetween: 20, // Устанавливаем расстояние между слайдами в 20 пикселей
        pagination: {
            el: '.swiper-pagination', // Указываем элемент для пагинации
            clickable: true, // Делаем буллеты кликабельными
            dynamicBullets: true, // Включаем динамические буллеты (уменьшение размера при переключении)
        },
        navigation: {
            nextEl: '.swiper-button-next', // Указываем элемент для кнопки "Следующий"
            prevEl: '.swiper-button-prev', // Указываем элемент для кнопки "Предыдущий"
        },
        breakpoints: { // Настройки адаптивности в зависимости от ширины экрана
            0: {
                slidesPerView: 1 // При ширине экрана до 0px показываем 1 слайд
            },
            768: {
                slidesPerView: 2 // При ширине экрана от 768px показываем 2 слайда
            },
            1024: {
                slidesPerView: 3 // При ширине экрана от 1024px показываем 3 слайда
            }
        }
    });
});
