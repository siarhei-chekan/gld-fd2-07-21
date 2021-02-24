// Создать массив чисел в диапазоне от 0 до 100. Подсчитать и вывети сумму тех элементов, которые больше 50

const myNumbers = [1, 100, 75, 33, 17, 27, 0, 9, 5, 11, 88, 99, 55];

function getElemLarge50(elem) {
    return elem > 50;
}

function calcSumElemLarge50(sum, elem) {
    return sum + elem;
}

const elemLarge50 = myNumbers.filter(getElemLarge50);
const sumElemLarge50 = elemLarge50.reduce(calcSumElemLarge50);

console.log(sumElemLarge50);