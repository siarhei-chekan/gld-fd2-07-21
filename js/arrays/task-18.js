/* Получить из строки 'a big brown fox jumps over the lazy dog' массив слов,
который содержит элементы, длина которых не больше 3 символа. Вывести массив в консоль. */

const string = "a big brown fox jumps over the lazy dog";

const arrayFromString = string.split(" ");

function getSmallWord(elem) {
    return elem.length <= 3;
}

const newArray = arrayFromString.filter(getSmallWord);
console.log(newArray);