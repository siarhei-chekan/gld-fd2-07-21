// Создать массив любых элементов. Обойти элементы массива и вывести их в консоль

const myArray = [1, 2, 3, 'a', 'b', 'c', 'x', 'y', 'z'];

function getElemFromArray(elem) {
    console.log(elem);
}

myArray.forEach(getElemFromArray);