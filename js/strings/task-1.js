/* Объявите три переменных: hour, minute, second. Присвойте им следующие значения: 4, 35, 5.
Выведите в консоль время в формате 04:35:05.
Используйте String.prototype.padStart(). */

const hour = 4;
const minute = 35;
const second = 5;

const hourTime = hour.toString().padStart(2, '0');
const minuteTime = minute.toString().padStart(2, '0');
const secondTime = second.toString().padStart(2, '0');

console.log( `Local time is ${hourTime}:${minuteTime}:${secondTime}` );