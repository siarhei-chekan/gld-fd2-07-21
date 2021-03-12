/* Создайте промис, который через 1 с возвращает строку "My name is".
Создайте функцию onSuccess, которая получает один параметр, прибавляет к нему Ваше имя и возвращает новую строку из функции.
Создайте функцию print, которая выводит в консоль значение своего параметра.
Добавьте два метода then и зарегистрируйте созданные функции. */

const promise = new Promise((resolve, _) => {
    setTimeout(() => resolve('My name is'), 1000);
});

function onSuccess(param) {
    const message = `${param} Serzhik`;

    return message;
}

function print(param) {
    console.log(param);
}

promise
    .then(onSuccess)    
    .then(print);