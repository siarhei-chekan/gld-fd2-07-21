/* Borrow Method - call/apply/bind. Создайте литерал объекта person со свойством name.
Вызовите метод work объекта employee из предыдущего задания. */

const person = {
    name: 'Serzhik',
}

const employee = {
    name: 'Ann',

    work () {
        const msg = `I am ${this.name}. I am working...`;
        console.log(msg);
    }
}

employee.work.call(person);
employee.work.apply(person);

const describePerson = employee.work.bind(person);
describePerson();