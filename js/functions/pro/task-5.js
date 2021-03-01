/* Arguments Object, Rest.
Создайте функцию parts, которая принимает неизвестное количество параметров. Каждый параметр – это группа предложений.
Функция должна вырезать из параметра подстроку, начиная с символа двоеточие : и заканчивая символом точка ..
Функция должна возвращать массив подстрок. Используйте Function Definition Expression (FDE). Тестовые данные:

param1 = "This is the first sentence. This is a sentence with a list of items: cherries, oranges, apples, bananas."
param2 = "This is the second sentence. This is a sentence with a list of items: red, blue, yellow, black."
result = ["cherries, oranges, apples, bananas", "red, blue, yellow, black"]. */

const parts = function(...params) {

    if (params.length !== 0) {
        const result = params.map(getSubstring);
        return result;
    }
    console.error('Аргументы не были добавлены!');
}

function getSubstring(elem) {
    const column = ':';
    const dot = '.';
    const indexOfColumn = elem.indexOf(column);
    const indexOfDot = elem.indexOf(dot, indexOfColumn + 1);
    const substring = elem.slice(indexOfColumn + 1, indexOfDot).trim();

    return substring;
}

param1 = "This is the first sentence. This is a sentence with a list of items: cherries, oranges, apples, bananas.";
param2 = "This is the second sentence. This is a sentence with a list of items: red, blue, yellow, black.";

console.log( parts(param1, param2) );