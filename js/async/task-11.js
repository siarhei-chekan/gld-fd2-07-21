/* Для браузера. Создайте промис, который перейдет в состояние resolve через 5с и вернет строку 'Promise Data'.
Создайте второй промис, который перейдет в состояние rejected по клику на кнопку.
Добавьте обработчик для кнопки. Используя метод race организуйте отмену промиса. */

'use strict';

const p1 = new Promise((resolve, _) => setTimeout(() => resolve('Promise Data'), 5000));

let rejectP2;

const p2 = new Promise((_, reject) => (rejectP2 = reject));

const rejectButton = document.querySelector('button');

rejectButton.addEventListener('click', rejectByClicking);

function rejectByClicking() {
    return rejectP2('Отклонили промис по нажатию на кнопку!');
}

Promise
    .race([p1, p2])
    .then(
        console.log,
        console.log);