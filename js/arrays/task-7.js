/* Создать массив 20 чисел с случайными значениями от 0 до 100. Отcортировать массив по возрастанию.
Вывести его в консоль.
Получить массив, отсортрованный в обратном порядке, и вывести его в консоль. */

function makeArrayFromRandomNumbers() {
    const resultArray = [];
    const min = 0;
    const max = 100;

    for (let i = 1; i <=20; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        resultArray.push(randomNumber);
    }
    
    return resultArray;
}

const randomNumbersArray = makeArrayFromRandomNumbers();
const sortRandomNumbersArray = randomNumbersArray.sort( (a, b) => a - b );
console.log(sortRandomNumbersArray);

const reverseSortRandomNumbersArray = sortRandomNumbersArray.reverse();
console.log(reverseSortRandomNumbersArray);
