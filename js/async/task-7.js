/* Используйте предыдущий код. Добавьте в функцию onSuccess генерацию исключения.
Обработайте даное исключение, используя catch.
Обратите внимание, что метод print при этом не выполняется. */

const promise = new Promise((resolve, _) => {
    setTimeout(() => resolve('My name is'), 1000);
});

function onSuccess(param) {
    try {
        const message = `${param} Serzhik`;
        throw new Error("Тут какая-то ошибка!!!");
        return message;
    } catch (error) {
        console.log(error);
    }    
}

function print(param) {
    console.log(param);
}

promise
    .then(onSuccess)
    .then(print);