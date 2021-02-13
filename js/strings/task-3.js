/* Объявите переменную и проинициализируйте ее строчным значением в переменном регистре 'ЯлЮбЛюJAVaScriPt'.
Напишите код, который преобразует эту строку к виду: первая буква в верхнем регистре, остальные буквы 
в нижнем регистре. Выведите результат работы в консоль.
Используйте String.prototype.toUpperCase(), String.prototype.toLowerCase(), String.prototype.slice(). */

const wrongString = 'ЯлЮбЛюJAVaScriPt';
const wrongStringInLowerCase = wrongString.toLowerCase();

const wrongFirstWord = wrongStringInLowerCase.slice(0, 1);
const correctFirstWord = `${wrongFirstWord[0].toUpperCase()}${wrongFirstWord.slice(1)}`;

const wrongSecondWord = wrongStringInLowerCase.slice(1, 6);
const correctSecondWord = `${wrongSecondWord[0].toUpperCase()}${wrongSecondWord.slice(1)}`;

const wrongThirdWord = wrongStringInLowerCase.slice(6, 10);
const correctThirdWord = `${wrongThirdWord[0].toUpperCase()}${wrongThirdWord.slice(1)}`;

const wrongFourthWord = wrongStringInLowerCase.slice(10);
const correctFourthWord = `${wrongFourthWord[0].toUpperCase()}${wrongFourthWord.slice(1)}`;

const correctString = `${correctFirstWord} ${correctSecondWord} ${correctThirdWord}${correctFourthWord}`;

console.log(correctString);