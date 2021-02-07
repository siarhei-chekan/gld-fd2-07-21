/* Напишите функцию randomInRange которая принимает два параметра - начало и конец промежутка, в котором искать случайное значение.
Функция должна каждый раз возвращать новое случайное число. */


function randomInRange(start, end) {
    
    return Math.random() * (end - start) + start;
}

console.log(randomInRange(2, 2.1));