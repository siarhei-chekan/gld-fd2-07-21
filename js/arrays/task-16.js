/* Создать массив с дублями. Найти первый элемент, который дублируется.
Заменить этот элемент и все его копии на символ '*'. Вывести массив в консоль. */

const myArray = [1, 2, 3, 3, 4, 3, 5, 4, 6, 7, 8, 9, 8, 8, 3];

function getFirstDuplicateElem(elem, index, array) {
    return array.indexOf(elem) !== index;
}

function replaceFirstDuplicateElem(elem) {
    if (elem === firstDuplicateElem) {
        return elem = '*';
    }
    return elem;
}

const firstDuplicateElem = myArray.find(getFirstDuplicateElem);

const newArray = myArray.map(replaceFirstDuplicateElem);
console.log(newArray);