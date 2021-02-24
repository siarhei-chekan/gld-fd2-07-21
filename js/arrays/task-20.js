/* Создать отсортированный массив чисел. Реализовать функцию binarySearch(arr, value),
которая принимает массив и значение и возвращает индекс значения в массиве или -1.
Функция должна использовать бинарный поиск.
Вывести результат в консоль */

const mySortedArray = [6, 12, 1, 3, 4, 25, 16, 99, 78, 87, 133].sort((a, b) => a - b);
console.log(mySortedArray);

function binarySearch(arr, value) {
    let left = 0;
    let right = arr.length - 1;
    let middleElem = arr[Math.floor(left + (right - left)/2)];

    while (left <= right) {
        if (middleElem === value) {
            return arr.indexOf(middleElem);
        }
        if (middleElem < value) {
            left = arr.indexOf(middleElem) + 1;
            middleElem = arr[Math.floor(left + (right - left)/2)];
        }
        if (middleElem > value) {
            right = arr.indexOf(middleElem) - 1;
            middleElem = arr[Math.floor(left + (right - left)/2)];
        }
    }

    return -1;
}

console.log(binarySearch(mySortedArray, 25));