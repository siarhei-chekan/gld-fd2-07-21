/* Создайте функции toConsoleLog, toConsoleError, toConsoleTrace, toConsoleTable с одним параметром.
Функции должна выводить значение параметра в консоль в соответствующем режиме.
Создайте функцию splitToWords с двумя параметрами: msg и callback.
Функция должна разделять строку на слова и использовать колбек для отображения слов.
Если второй параметр не задан, функция должна возвращать массив слов. */

function toConsoleLog(param) {
    console.log(param);
}

function toConsoleError(param) {
    console.error(param);
}

function toConsoleTrace(param) {
    console.trace(param);
}

function toConsoleTable(param) {
    console.table(param);
}

toConsoleLog(25);
toConsoleError(25);
toConsoleTrace(25);
toConsoleTable( {name: 'Serzhik', age: 33} );


function splitToWords(msg, callback) {
    const arrFromMsg = msg.split(' ');

    if (arguments.length < 2) {
        return arrFromMsg;        
    } else {
        arrFromMsg.forEach(callback);
    }
}

function showWords(elem) {
    console.log(elem);
}

const msg = 'Это строка которую нужно разделить на отдельные слова';

splitToWords(msg, showWords);
console.log( splitToWords(msg) );