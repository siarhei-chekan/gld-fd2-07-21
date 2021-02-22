/* Создать двумерный массив:

1 2 3
4 5 6
7 8 9

Вывести его в консоль. Преобразовать массив одномерный и снова вывести в консоль. */

const twoDimensionalArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(twoDimensionalArray);

const oneDimensionalArray = twoDimensionalArray.flat();
console.log(oneDimensionalArray);