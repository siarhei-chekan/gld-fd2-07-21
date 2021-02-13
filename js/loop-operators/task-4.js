/* Нарисуйте в консоле пирамиду на 10 уровней как показано ниже

        x
       xxx
      xxxxx
     xxxxxxx
    xxxxxxxxx
       ... */

const char = 'x';
const quantityOfRow = 10;
let charInRow;
const space = ' ';

for (let i = 1; i <= quantityOfRow; i++) {

        let quantityOfChar = 1 + (i - 1) * 2;
        charInRow = char.repeat(quantityOfChar);
        let row = space.repeat( quantityOfRow - i ) + charInRow;

        console.log(row);

}