/* Даны переменные a и b. Проверьте, что a делится без остатка на b.
Если это так - выведите 'Делится' и результат деления, 
иначе выведите 'Делится с остатком' и остаток от деления. */

let a;
let b;

function chekRemainder(a, b) {
    const remainder = a % b; 
    
    if (remainder === 0) {
        const divisionResult = a / b;

        console.log( `Делится с результатом: ${divisionResult}` );

    } else {

        console.log( `Делится с остатком: ${remainder}` );
    }
}

chekRemainder(15, 4);