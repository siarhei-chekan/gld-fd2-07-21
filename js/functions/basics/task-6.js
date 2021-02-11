/* Объявите две строчные переменные: params и body и проинициализируйте их строчными значениями, 
которые представляют список параметров и тело будущей функции.
Создайте функцию, используя эту информацию с помощью Function Constructor (FC). Вызовите эту функцию. */

const params = 'a, b, c';
const body = 'return (a + b) ** c';

const test = new Function(params, body);

console.log(test(3, 6, 0.5));