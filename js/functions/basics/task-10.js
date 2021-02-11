/* Решать как для браузера. Создайте функцию-конструктор Calculator, который создаёт объекты с четырьмя методами:
read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
multiply() возвращает произведение введённых свойств.
history() возвращает историю вызванных функций при работе с объектом начиная с момента его создания. */

function Calculator() {
    let memory = [];

    this.read = function read() {
        this.a = +prompt('Введите число a:', '0');
        this.b = +prompt('Введите число b:', '0');
        memory.push(this.read.name);
    };
    this.read();

    this.sum = function sum() {
        memory.push(this.sum.name);
        return this.a + this.b;        
    };
    
    this.multiply = function multiply() {
        memory.push(this.multiply.name);
        return this.a * this.b;
    };

    this.history = function history() {
        memory.push(this.history.name);
        return memory;
    };

}

const calc1 = new Calculator();

calc1.sum();
calc1.multiply();
calc1.sum();
calc1.sum();
calc1.multiply();
console.log(calc1.history());
console.log(calc1.multiply());