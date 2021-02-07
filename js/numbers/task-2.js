/* Найдите квадратный корень из 999. Результат округлите до целых, до десятых, до сотых. */

const a = 999;

const square = a ** 0.5;
const square1 = Math.round(square);
const square2 = Math.round(square * 10) / 10;
const square3 = Math.round(square * 100) / 100;

console.log(square);
console.log(square1);
console.log(square2);
console.log(square3);