/* Создать массив. Получить последний элемент массива. Без удаления этого элемента из массива. 
С удалением этого элемента из массива. Выведите массивы в консоль */

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const lastElementInNumbersWithoutDeleting = myNumbers[myNumbers.length - 1];
console.log(lastElementInNumbersWithoutDeleting);
console.log(myNumbers);

const lastElementInNumbersWithDeleting = myNumbers.pop();
console.log(lastElementInNumbersWithDeleting);

console.log(myNumbers);
