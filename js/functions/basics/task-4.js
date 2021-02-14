/* Создайте функцию comp, которая должна сравнивать значения двух параметров a и b и возвращать 1, 
если они равны и -1, если они не равны.
Используйте Function Definition Expression (FDE). Вызовите функцию до ее объявления.
Тестовые данные:

a = 'abc', b = 'abc', result = 1
a = 'abC', b = 'abc', result = -1 */

// console.log(comp()); //вызывает ошибку, т.к. функция в этой строке ещё не создана.
const comp = function(a, b) {
    let result;

    if (a === b) {
        result = 1;
    } else {
        result = -1;
    }
    const message = `result = ${result}`;

    return message;
};

console.log( comp('abc', 'abc') );
console.log( comp('abC', 'abc') );