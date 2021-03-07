/* Создать массив с дублями элементов. На его основе создать новый массив уникальных элементов (удалить дубли).
Вывести новый массив в консоль. */

const myArray = [7, 5, 5, 1, 2, 3, 3, 4, 3, 5, 4, 6, 7, 8, 9, 8, 8];

function getUniqueElem(elem, index, array) {
    return array.indexOf(elem) === index;
}

const arrayFromUniqueElem = myArray.filter(getUniqueElem);
console.log(arrayFromUniqueElem);