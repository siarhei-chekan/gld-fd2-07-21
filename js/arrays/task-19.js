/* Создать массив, который содержит строки и числа. Проверить, содержит ли массив только строки.
Вывети результат в консоль */

const myArray = [1, 2, 3, 'xx', 'yy', 'zz', 4, 5, 'qq'];

function isOnlyString(elem) {
    return typeof(elem) === 'string';
}

if (myArray.length !== 0) {
    const result = myArray.every(isOnlyString);
    const mes = `Массив содержит только строковые элементы?: ${result}`;
    console.log(mes);
} else {
    const result = false;
    const mes = `Массив содержит только строковые элементы?: ${result}`;
    console.log(mes);
}