/* Напишите код, который выводит в консоль true, если строка str содержит 'discount' или 'low price',
а иначе false.
Тестовые данные: 'buy now, discount', 'buy now, dIscOUnt', 'take that, low price', 'low take that, prICE'.
Используйте String.prototype.includes(). */

const checkedString1 = 'discount';
const checkedString2 = 'low price';

function checkDiscounts(string) {
    const messageInLowerCase = string.toLowerCase();

    const result = messageInLowerCase.includes(checkedString1)
        ? true
        : messageInLowerCase.includes(checkedString2)
            ? true
            : false;
    
    console.log(result);
}

checkDiscounts('buy now, discount');
checkDiscounts('buy now, dIscOUnt');
checkDiscounts('take that, low price');
checkDiscounts('low take that, prICE');