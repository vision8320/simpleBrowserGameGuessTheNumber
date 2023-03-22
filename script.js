"use strict";

///////////////////////////////////////

/* 
ЗАДАЧА: 
Создайте игру в угадай число.


Удачи)
*/
//Переменные
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again')
let score = 20;
let highScore = 0;




//Рандомное число
let randomNumber = Math.trunc(Math.random() * 19 + 1);
//Вывод в консоль чисел
console.log(randomNumber);
//console.log(inputNumber);
//Функция отображения сообщения:
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
};
//Обработчик на кнопку проверки:
function first() {
    checkBtn.addEventListener('click', () => {
        const inputNumber = +document.querySelector('.guess').value;
        if (inputNumber == randomNumber) {
            displayMessage(`Вы угадали число ${randomNumber}!`)
            document.querySelector('.number').textContent = randomNumber;
            document.querySelector('body').style.background = 'green'
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore
            }

        } else if (!inputNumber && typeof inputNumber === "number") {
            displayMessage("Введите число от 1 до 20!")
            document.querySelector('.number').textContent = "?";
            if (score > 1) {
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.score').textContent = 'Вы проиграли!';
            }
        } else if (inputNumber < randomNumber && inputNumber > 0) {
            displayMessage('Угадываемое число больше!');
            document.querySelector('.number').textContent = "?";
            if (score > 1) {
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.score').textContent = 'Попытки закончились!';
                document.querySelector('body').style.background = 'red'
            }
        } else if (inputNumber > randomNumber) {
            displayMessage('Угадываемое число меньше!');
            document.querySelector('.number').textContent = "?";
            if (score > 1) {
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.score').textContent = 'Попытки закончились!';
            }
        }
    })
};
first();

//Обработчик на кнопку сброса
againBtn.addEventListener('click', () => {
    score = 20;
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.cssText = `
    background: radial-gradient(
        circle,
        rgba(35, 34, 41, 1) 51%,
        rgba(56, 59, 60, 1) 100%
      );`;
    document.querySelector('.guess').value = ""
    randomNumber = Math.trunc(Math.random() * 19 + 1);
    console.log(randomNumber);
});