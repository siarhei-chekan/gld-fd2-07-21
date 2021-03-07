// Создать массив любых элементов. Найти индекс указаного элемента в массиве и вывести его в консоль

const myArray = [1, 2, 3, 'a', 'b', 'c', [6, 6, 6]];

function isSpecifiedElement(element) {
    const specifiedElement = 'c';
    return element === specifiedElement;
}

const indexOfElement = myArray.findIndex(isSpecifiedElement);
console.log(indexOfElement);