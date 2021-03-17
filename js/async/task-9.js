/* Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с, 
а второй промис возвращает объект {age: 16} через 3 с.
Получите результаты работы двух промисов, объедините свойства объектов и выведите в консоль.
Используйте Promise.all. */

const p1 = new Promise( (resolve, _) => setTimeout(() => resolve( {name: "Anna"} ), 2000) );
const p2 = new Promise( (resolve, _) => setTimeout(() => resolve( {age: 16} ), 3000));

Promise
    .all( [p1, p2] )
    .then(results => {
        const properties = results[0].name + results[1].age;
        console.log(properties);
    });