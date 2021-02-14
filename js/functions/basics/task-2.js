/* Создайте тег-функцию currency, которая формитирует числа до двух знаков после запятой
и добавляет знак доллара перед числом в шаблонном литерале. */

const number = 199.956;
const price = +number.toFixed(2);

function currency (arr, priceArg) {
    const message =` ${arr[0]}${priceArg}`;

    console.log(message);  
}

currency`$${price}`;