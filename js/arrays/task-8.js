/* Создать массив [3, 0, -1, 12, -2, -4, 0, 7, 2]. 
На его основе создать новый массив [-1, -2, -4, 0, 0, 3, 12, 7, 2].

первая часть - отрицательные числа в том же порядке
вторая часть - нули
третья часть - положительные числа в том же порядке */

const myArray = [3, 0, -1, 12, -2, -4, 0, 7, 2];
let newArray = [];

function getNegativeNumbers(elem) {
    return elem < 0;
}

function getZero(elem) {
    return elem === 0;
}

function getPositiveNumbers(elem) {
    return elem > 0;
}

const negativeNumbers = myArray.filter(getNegativeNumbers);
const zero = myArray.filter(getZero);
const positiveNumbers = myArray.filter(getPositiveNumbers);

newArray.push(negativeNumbers, zero, positiveNumbers);
newArray = newArray.flat();

console.log(newArray);