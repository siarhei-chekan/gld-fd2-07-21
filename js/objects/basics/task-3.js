/* Создайте функцию getObjThis(), которая возвращает this. Создайте несколько объектов city1 и city2 
по примеру предыдущего задания с методом getCityName.
Разве что в этом случае метод getCityName должен ссылаться на функцию getObjThis.
Проверьте работу метода у обоих объектов. */

function getObjThis() {
    return this;
}

const city1 = {
    name: 'London',
    population: 10000000,

    getCityName: getObjThis
};

const city2 = {
    name: 'Toronto',
    population: 2730000,

    getCityName: getObjThis
};

console.log( city1.getCityName() );
console.log( city2.getCityName() );