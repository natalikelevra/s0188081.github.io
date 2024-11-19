window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed"); });
// Добавляем обработчик события на кнопку с id 'calculateButton'
document.getElementById('calculateButton').addEventListener('click', function() {
    // Получаем значение цены продукта из поля ввода и преобразуем его в число
    const productPrice = parseFloat(document.getElementById('product').value);
    
    // Получаем количество товара из поля ввода и также преобразуем его в число
    const quantity = parseFloat(document.getElementById('quantity').value); // Используем parseFloat для проверки

    // Получаем элемент, в который будем выводить результат
    const resultDiv = document.getElementById('result');

    // Проверяем, является ли quantity не числом, меньше 0 или не целым числом
    if (isNaN(quantity) || quantity < 0 || !Number.isInteger(quantity)) {
        // Если условие истинно, выводим сообщение об ошибке
        resultDiv.textContent = "Введите корректное целое, положительное число"; // Сообщение об ошибке
        resultDiv.style.color = "red"; // Устанавливаем цвет сообщения об ошибке на красный
        return; // Выходим из функции, чтобы не продолжать выполнение кода
    }

    // Вычисляем общую стоимость, умножая цену продукта на количество
    const totalCost = productPrice * quantity;
    
    // Выводим результат в элемент resultDiv, форматируя его до двух знаков после запятой
    resultDiv.textContent = `Общая стоимость: ${totalCost.toFixed(2)} рублей.`;
    resultDiv.style.color = "white"; // Устанавливаем цвет текста результата на белый
});

const colors = ['#561c24', '#3c0008', '#38040e', '#640d14', '#800e13', '#400106'];
function createHearts() {
    const heartCount = 20; // Количество сердец
    const body = document.body;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';

        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = Math.random() * window.innerHeight + 'px';

       // Случайный цвет из палитры
       const randomColor = colors[Math.floor(Math.random() * colors.length)];
       heart.style.backgroundColor = randomColor; // Устанавливаем цвет сердца
       heart.style.borderColor = randomColor; // Устанавливаем цвет для кругов

       // Устанавливаем цвет кругов
       heart.style.setProperty('--circle-color', randomColor);

        // Добавление анимации
        heart.style.animationDuration = 7; 
        heart.style.animationName = 'float';

        body.appendChild(heart);

        
        
        // Запуск анимации
        setTimeout(() => {
            heart.style.animationName = 'pulse';
        }); 

        setTimeout(() => {
            heart.style.animationName = 'fadeOut'; // Применяем анимацию исчезновения
            heart.style.animationDuration = '1s'; // Длительность анимации исчезновения
            setTimeout(()=>{
                heart.remove();
            }, 950);
            
        }, 4000); // Удаление через 4 секунд
    }
}
// Добавление стилей для псевдоэлементов с помощью JavaScript
const styleSheet = document.createElement("style");
document.head.appendChild(styleSheet);
styleSheet.sheet.insertRule(`
.heart::before {
   background-color: var(--circle-color); 
   top: -25px; 
   left: 0; 
}`, styleSheet.sheet.cssRules.length);
styleSheet.sheet.insertRule(`
.heart::after {
   background-color: var(--circle-color); 
   left: 25px; 
   top: 0; 
}`, styleSheet.sheet.cssRules.length);

setInterval(createHearts, 3000); // Создавать сердца каждые 3 секунды
