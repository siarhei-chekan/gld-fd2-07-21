/* Подсчитать в строке "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh" отдельно количество букв r, k, t 
и вывести в консоль */

const madString = "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh";

function getLetterR(elem) {
    return elem === "r";
}

function getLetterK(elem) {
    return elem === "k";
}

function getLetterT(elem) {
    return elem === "t";
}

const myArray = Array.from(madString);

const arrFromLetterR = myArray.filter(getLetterR);
const numOfLetterR = arrFromLetterR.length;

const arrFromLetterK = myArray.filter(getLetterK);
const numOfLetterK = arrFromLetterK.length;

const arrFromLetterT = myArray.filter(getLetterT);
const numOfLetterT = arrFromLetterT.length;

const mes = `Количество букв r: ${numOfLetterR}
Количество букв k: ${numOfLetterK}
Количество букв t: ${numOfLetterT}`;

console.log(mes);