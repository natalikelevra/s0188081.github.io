document.getElementById('calculateButton').addEventListener('click', function() {
    const productPrice = parseFloat(document.getElementById('product').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    
    const resultDiv = document.getElementById('result');

    if (isNaN(quantity) || quantity < 0) {
        resultDiv.textContent = "Введите корректное число";
        resultDiv.style.color = "red"; // Цвет сообщения об ошибке
        return; // Выход из функции
    }

    const totalCost = productPrice * quantity;
    
    resultDiv.textContent = `Общая стоимость: $${totalCost.toFixed(2)}`;
    resultDiv.style.color = "white"; // Цвет результата
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
