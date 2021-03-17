/* Создайте промис, который после создания сразу же переходит в состояние resolve и возвращает строку 'Promise Data'.
Получите данные промиса и выведите их в консоль. */

const promise = new Promise((resolve, _) => resolve('Promise Data'));

promise.then(console.log);