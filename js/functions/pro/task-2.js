/* Function as an Object.
Создайте функцию str(), которая принимает один строчный параметр и выводит в консоль 'String is non empty',
если параметр - непустая строка и 'String is empty', если параметр – пустая строка.
Создайте функцию str.isNonEmptyStr(), как свойство функции str.
Эта функция должна принимать один параметр и возвращать true, если параметр непустая строка, иначе false.
Используйте эту функцию для реализации условия в основной функции.
Тестовые данные:

str.isNonEmptyStr(), result = false
str.isNonEmptyStr(''), result = false
str.isNonEmptyStr('a'), result = true
str.isNonEmptyStr(1), result = false
str(), console.log('String is empty')
str('a'), console.log('String is non empty') */ 

function str(string) {

    if (str.isNonEmptyStr(string)) {
        console.log('String is non empty');
    } else {
        console.log('String is empty');
    }
}

str.isNonEmptyStr = function(string) {

    if (string) {
        if (typeof string === 'string') {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

console.log( str.isNonEmptyStr() );
console.log( str.isNonEmptyStr('') );
console.log( str.isNonEmptyStr('a') );
console.log( str.isNonEmptyStr(1) );

str();
str('a');