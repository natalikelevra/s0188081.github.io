document.addEventListener("DOMContentLoaded", () => {
    const price = document.querySelector("#price-container") // Контейнер для отображения цены
    const input = document.querySelector("#input-box") // Поле ввода количества товаров
    const optionContainer = document.querySelector("#option-container") // Контейнер для опций услуги "Dizagn"
    const propertyContainer = document.querySelector("#property-container") // Контейнер для опций услуги "Odnoton"
    const radioButtons = document.querySelectorAll('input[name="service-type"]') // Все радиокнопки типа услуги
    const btn = document.querySelector(".button") // Кнопка для расчета стоимости
    let item // Переменная для хранения элемента сообщения об ошибке или результате

    const numberRegex = /^\d+$/ // Регулярное выражение для проверки, является ли введенное значение числом

    // Обработчик события нажатия кнопки
    btn.addEventListener("click", () => {
        if (input.value.trim() === "") { // Проверяем, что поле ввода не пустое
            showError("Ошибка: поле не должно быть пустым.") // Показываем сообщение об ошибке
            return // Выходим из функции
        }
        if (!numberRegex.test(input.value.trim())) { // Проверяем, что введенное значение - число
            showError("Ошибка: введены неверные данные. Пожалуйста, введите число.") // Показываем сообщение об ошибке
            return // Выходим из функции
        }
        calculateCost() // Вызываем расчет стоимости при нажатии кнопки
    })

    // Обработчик изменения типа услуги
    radioButtons.forEach((radio) => {
        radio.addEventListener("change", () => { // При изменении радиокнопки
            optionContainer.style.display = "none" // Скрываем контейнер опций
            propertyContainer.style.display = "none" // Скрываем контейнер свойств

            if (radio.value === "Dizagn") { // Если выбрана услуга "Dizagn"
                optionContainer.style.display = "block" // Показываем контейнер опций
            } else if (radio.value === "Odnoton") { // Если выбрана услуга "Odnoton"
                propertyContainer.style.display = "block" // Показываем контейнер свойств
                document.querySelector("#base").checked = true // Автоматически выбираем базовую комплектацию
            }

            calculateCost() // Пересчитываем стоимость при смене типа услуги
        })
    })

    // Обработчик изменения значения инпута
    input.addEventListener("input", calculateCost) // Пересчитываем стоимость при вводе значения

    // Обработчик изменения опции видеокарты
    document.querySelector("#options").addEventListener("change", calculateCost) // Пересчитываем стоимость при изменении опции

    // Обработчик изменения чекбоксов для монитора
    document.querySelector("#base").addEventListener("change", (event) => {
        if (!event.target.checked) { // Если чекбокс снят
            event.target.checked = true // Запретить снятие выбора
        }
        calculateCost() // Пересчитываем стоимость после изменения состояния чекбокса
    })

    document.querySelector("#paraf").addEventListener("change", calculateCost) // Пересчитываем стоимость при изменении состояния чекбокса "paraf"
    document.querySelector("#k4").addEventListener("change", calculateCost) // Пересчитываем стоимость при изменении состояния чекбокса "k4"
    document.querySelector("#mas").addEventListener("change", calculateCost) // Пересчитываем стоимость при изменении состояния чекбокса "mas"

    function calculateCost() {
        const inputValue = parseInt(input.value.trim(), 10) // Преобразуем введенное значение в число
        if (!numberRegex.test(input.value.trim())) { // Проверяем, что введенное значение - число
            showError("Ошибка: введите количество товаров.") // Показываем сообщение об ошибке
            return // Выходим из функции
        }

        let cost = 0 // Переменная для хранения стоимости

        const selectedServiceType = document.querySelector(
            'input[name="service-type"]:checked'
        ).value // Получаем выбранный тип услуги

        if (selectedServiceType === "Without") { 
            cost = 999 // Стоимость для услуги "Without"
        } else if (selectedServiceType === "Dizagn") {
            const selectedOption = document.querySelector("#options").value 
            if (selectedOption === "nakl") {
                cost = 2300 // Стоимость для опции "nakl"
            } else if (selectedOption === "stemp") {
                cost = 2800 // Стоимость для опции "stemp"
            } else if (selectedOption === "hand") {
                cost = 3800 // Стоимость для опции "hand"
            }
        } else if (selectedServiceType === "Odnoton") {
            if (document.querySelector("#base").checked) {
                cost += 1800 // Добавляем стоимость базовой комплектации, если она выбрана
            }
            if (document.querySelector("#paraf").checked) {
                cost += 1000 // Добавляем стоимость для опции "paraf", если она выбрана
            }
            if (document.querySelector("#k4").checked) {
                cost += 700 // Добавляем стоимость для опции "k4", если она выбрана
            }
            if (document.querySelector("#mas").checked) {
                cost += 1200 // Добавляем стоимость для опции "mas", если она выбрана
            }
        }

        const totalCost = inputValue * cost // Рассчитываем общую стоимость

        showResult(`Cтоимость: ${totalCost} рублей`) // Отображаем результат расчета стоимости
    }

    function showError(message) {
        if (!item) { 
            item = document.createElement("div") 
            item.classList.add("price__item") 
            price.appendChild(item) 
        }
        item.textContent = message // Устанавливаем текст сообщения об ошибке
    }

    function showResult(message) {
        if (!item) { 
            item = document.createElement("div") 
            item.classList.add("price__item") 
            price.appendChild(item) 
        }
        item.textContent = message // Устанавливаем текст результата расчета стоимости
    }
})
