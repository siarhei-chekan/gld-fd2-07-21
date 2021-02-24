/* Создать массив любых элементов. Добавить элемент в конец массива. Модифицировать текущий массив.
Создать новый массив. Выведите массивы в консоль. */

const myArray = ['a', 'b', 'c', 'd'];

myArray.push('e');
console.log(myArray);

myArray.reverse();

console.log(myArray);

const myArrayFromFilledElem = myArray.fill('z', -2).slice(-2);

console.log(myArrayFromFilledElem);
console.log(myArray);