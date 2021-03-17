/* Создайте промис, который постоянно находится в состоянии pending.
В конструкторе промиса выведите в консоль сообщение "Promise is created". */

const promise = new Promise((resolve, reject) => console.log('Promise is created'));
setTimeout(console.log, 1000, promise);