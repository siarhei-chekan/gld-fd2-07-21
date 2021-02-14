/* Объявите массив arr = [1, 8, 3, 5, 12, 7, 9, 11]. Используя стрелочные функции создайте новый 
массив из элементов elem * elem, которые меньше 100 и отсортируйте его по возрастанию.
Выведите результат в консоль. */

const arr = [1, 8, 3, 5, 12, 7, 9, 11];
let newArray = [];

for (let elem of arr) {  
    const newElem = elem * elem;

    const makeNewArray = newElem => {
        if (newElem < 100) {            
            newArray.push(newElem); 
        }

        return newArray;
    };

    makeNewArray(newElem);
}

const sortNewArray = (a, b) => a - b;
newArray.sort(sortNewArray);

console.log(newArray);