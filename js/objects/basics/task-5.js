/* Создать функцию-конструктор Person() для конструирования объектов. Добавить два метода:
setFirstName() и setLastName().
Методы должны вызываться в цепочке, например obj.setFirstName(...).setLastName(...) */

function Person() {

    this.setFirstName = function(firstName) {
        this.firstName = firstName;
        return this;
    };

    this.setLastName = function(lastName) {
        this.lastName = lastName;
        return this;
    };
}

const player = new Person();

player.setLastName('Chekan').setFirstName('Serzhik');

console.log(player.firstName);
console.log(player.lastName);