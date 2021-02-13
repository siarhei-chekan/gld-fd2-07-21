/* Напишите код, который проверяет длину строки str,
и если она превосходит maxlength – заменяет конец str на '...', так чтобы ее длина стала равна maxlength.
Результатом должна быть (при необходимости) усечённая строка. Выведите строку в консоль.
Тестовые данные:
'Вот, что мне хотелось бы сказать на эту тему:', 20
'Всем привет!', 20 */

const maxLength = 20;
let resultString;
const ellipsis = '...';

function checkedLengthOfString(str) {

    if (str.length > maxLength) {
        const validString = str.slice(0, maxLength - ellipsis.length);
        resultString = `${validString}${ellipsis}`;
    } else {
        resultString = str;
    }
    console.log(resultString);
}

checkedLengthOfString('Всем привет!');
checkedLengthOfString('Вот, что мне хотелось бы сказать на эту тему:');