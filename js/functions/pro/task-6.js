/* Создайте литерал объекта employee со следующими свойствами: name: 'Ann', work – функция,
которая выводит в консоль сообщение "I am Ann. I am working...".
Имя Ann должно быть взято из свойства name Тестовые данные:

employee.work()  результат в консоле "I am Ann. I am working..." */

const employee = {
    name: 'Ann',

    work () {
        const msg = `I am ${this.name}. I am working...`;
        console.log(msg);
    }
}

employee.work();