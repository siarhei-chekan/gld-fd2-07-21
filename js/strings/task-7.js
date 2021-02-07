// Напишите код, который из строки $100 получит число и выведите его в консоль.

const price = '$100';
const dollarSign = '$';

const indexOfDollarSign = price.indexOf(dollarSign);
const numberFromPrice = +price.slice(indexOfDollarSign +1);

console.log(numberFromPrice);