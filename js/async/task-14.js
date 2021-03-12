/* Создайте масив урлов ['http://a', 'http://b']. Создайте функцию sendRequest, которая принимает один параметр - url.
Функция в первой строке должна выводить в консоль сообщение 'sendRequest is called' и возвращать
через 2 с для первого урла объект { name: 'Ann' }, а для второго урла объект { age: 16 }.
Создайте асинхронную функцию myThirdAsyncFunction которая должна вызвать функцию sendRequest для каждого урла
и вернуть объект {name: 'Ann', age: 16}.
Обработайте результат работы функции myThirdAsyncFunction. */

const someUrls = ['http://a', 'http://b'];

function sendRequest(url) {
    console.log('sendRequest is called');
    
    return new Promise((resolve, _) => setTimeout(() => {
        if (url === 'http://a') {
            resolve( { name: 'Ann' } );
        } else if (url === 'http://b') {
            resolve( { age: 16 } );
        }
    }, 2000));
}

async function myThirdAsyncFunction() {
    const obj1 = await sendRequest(someUrls[0]);
    const obj2 = await sendRequest(someUrls[1]);
    const user = Object.assign({}, obj1, obj2);

    return user;
}

myThirdAsyncFunction().then(console.log);