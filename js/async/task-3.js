/* Создайте промис, который после создания сразу же переходит в состояние rejected и возвращает строку 'Promise Error'.
Получите данные промиса и выведите их в консоль. */

const promise = new Promise((_, reject) => reject('Promise Error'));

promise.catch(console.log);