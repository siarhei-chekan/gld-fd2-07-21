/* Дан массив numbers. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79. */

const numbers = [12, 15, 20, 25, 59, 79];
let sum = 0;
let average;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];    
}

average = sum / numbers.length;

console.log(average);