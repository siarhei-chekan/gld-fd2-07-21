/* Используйте предыдущее задание. Пусть теперь второй промис переходит в состояние rejected со значением "Promise Error".
Измените код, чтобы обработать эту ситуацию. Используйте Promise.allSettled. */

const p1 = new Promise( (resolve, _) => setTimeout(() => resolve( {name: "Anna"} ), 2000) );
const p2 = new Promise( (_, reject) => setTimeout(() => reject( 'Promise Error' ), 3000));

Promise
    .allSettled( [p1, p2] )
    .then(results => {
        const validUsers = results.filter(elem => elem.status !== 'rejected');
        const promiseValue = validUsers.map(elem => elem.value);
        promiseValue.forEach(elem => console.log(elem.name));
    });
