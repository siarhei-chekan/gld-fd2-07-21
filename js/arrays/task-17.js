/* Создать массив целых чисел. На его основе создать массивы – представления этих же чисел в бинарном,
восьмеричном и шестнадцатеричном виде. Вывести эти массивы в консоль. */

const myArray = [0, 1, 2, 3, 125, 255, 999];

function createBinaryNumber(elem) {
    return elem.toString(2);
}

function createOctalNumber(elem) {
    return elem.toString(8);
}

function createHexadecimalNumber(elem) {
    return elem.toString(16);
}

const arrayOfBinaryNumber = myArray.map(createBinaryNumber);
console.log(arrayOfBinaryNumber);

const arrayOfOctalNumber = myArray.map(createOctalNumber);
console.log(arrayOfOctalNumber);

const arrayOfHexadecimalNumber = myArray.map(createHexadecimalNumber);
console.log(arrayOfHexadecimalNumber);