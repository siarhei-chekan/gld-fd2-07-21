/* Выведите в консоль пирамиду на 9 уровней как показано ниже.
Используйте String.prototype.repeat().

1
22
333
4444
... */

const quantityOfRows = 9;
let charInRow;
let rowInPyramid;

for (let i = 1; i <= quantityOfRows; i++) {
    charInRow = i.toString();
    rowInPyramid = charInRow.repeat(i);

    console.log(rowInPyramid);
}