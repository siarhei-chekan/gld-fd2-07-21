/* Создайте промис, который переходит в состояние resolved через 3с.
(Используйте setTimeout) и возвращает строку 'Promise Data'.
Получите данные промиса и выведите их в консоль. */

const promise = new Promise( (resolve, _) => {
    setTimeout(() => resolve('Promise Data'), 3000);
});

promise.then(console.log);