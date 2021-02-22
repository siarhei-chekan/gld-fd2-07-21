/* Создать массив любых элементов. Вставить новый элемент под индексом 3.
Модифицировать текущий массив. Создать новый массив. Выведите массивы в консоль. */

const myArray = ['a', 'b', 'c', 'd', 8, 42, 33];
console.log(myArray);

myArray.splice(3, 0, 'zzz');
myArray.sort();

console.log(myArray);

const myArray2 = myArray.slice(2);
console.log(myArray2);

const myArray3 = myArray.concat(myArray2);
console.log(myArray3);