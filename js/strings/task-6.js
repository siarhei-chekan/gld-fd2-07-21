/* Проверить, содержит ли строка второе вхождение подстроки, вернуть true или false. 
Используйте String.prototype.includes(), String.prototype.indexOf() 
Test- 'Ослик Иа-Иа потерял свой хвостик' */


function checkSecondOccurrence (ourString, subString) {
    let secondOccurrence = false;
    const firstOccurrenceIndex = ourString.indexOf(subString);

    if (firstOccurrenceIndex !== -1) {
        const strForSecondOccurrence = ourString.slice(firstOccurrenceIndex + 1);
        secondOccurrence = strForSecondOccurrence.includes(subString);  
    }

    console.log(secondOccurrence);    
}

checkSecondOccurrence ('Ослик Иа-Иа потерял свой хвостик', 'Иа');