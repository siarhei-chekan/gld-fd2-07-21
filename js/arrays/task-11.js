/* Создать массив любых элементов. Получить случайный элемент из массива и вывести его в консоль. */

const myArray = [1, 2, 3, 'a', 'b', 'c', [1, 2, 3]];

const min = 0;
const max = myArray.length - 1;

const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
const randomElemFromMyArray = myArray[randomIndex];

console.log(randomElemFromMyArray);