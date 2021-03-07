/* Создать массив любых элементов.
На его основе получить новый массив – подмножество элементов оригинального массива начиная с индекса a и заканчивая индексом b.
Вывести массив в консоль. */

const myArray = [1, 2, 3, 'a', 'b', 'c', [6, 6, 6]];

const indexA = 2;
const indexB = 7;

const newArray = myArray.slice(indexA, indexB);
console.log(newArray);