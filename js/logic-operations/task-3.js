/* Объявите две переменных: a, b. Вычислите их сумму и присвойте переменной result.
Если результат больше 5, выведите его в консоль, иначе умножьте его на 10 и выведите в консоль.
Данные для тестирования: 2, 5 и 3, 1. */

let a;
let b;

function testValue(a, b) {
    let result = a + b;

    if (result > 5) {
        console.log(result);
    } else {
        console.log( result * 10 );
    }
}

testValue(2, 5);
testValue(3, 1);