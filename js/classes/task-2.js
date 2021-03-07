/* Создать виртуальную рыбку, которая имеет свои координаты (например, в аквариуме) по x, y и z,
у нее есть цвет, размер, она двигается, кушает, может размножаться.
У неё должно быть приватное поле содержащее многообразие еды которое она ест. При попытке скормить рыбке что-то,
она должна выбрать только то, что она может скушать.
Создать вторую рыбку используя существующий класс (без наследования от первой рыбки),
которая кушает на один продукт больше, чем оригинальная рыбка.
Продумать дополнительные методы и их реализацию (тут надо всё сделать чтоб работало, а не просто консоль-логи),
которые позволят управлять такой рыбкой. */

class Fish {
    #food = ['манка', 'червяк', 'мушка', 'жук', 'мотыль', 'личинка комара'];
    #dateOfBirth = new Date();

    constructor(name, colorOfFish, sizeOfFish, coordinates) {
        this.name = name;
        this.color = colorOfFish;
        this.size = sizeOfFish;
        this.coordinates = coordinates;
    }

    move(x, y, z) {
        this.coordinates.x = x;
        this.coordinates.y = y;
        this.coordinates.z = z;
        console.log(`Рыбка "${this.name}" передвинулась в позицию x = ${this.coordinates.x}; y = ${this.coordinates.y}; z = ${this.coordinates.z}.`);
        return this.coordinates;
    }

    breatheTheAir() {
        this.coordinates.z = 0;
        console.log(`Рыбка "${this.name}" всплыла на поверхность подышать в позицию x = ${this.coordinates.x}; y = ${this.coordinates.y}; z = ${this.coordinates.z}.`);
        return this.coordinates;
    }

    eat(someFood) {
        if ( this.#food.includes(someFood) ) {
            console.log(`Я съем ${someFood}.`);
        } else {
            console.log(`Я не буду есть ${someFood}!!!`);
        }
    }

    reproduction() {
        console.log(`Новая рыбка только что появилась на свет!`);
        return new Fish(this.name, this.color, 1, this.coordinates);
    }

    grow() {
        const currentDate = new Date();

        if (this.#dateOfBirth !== currentDate) {
            this.size += 1; 
            console.log(`Ура! Рыбка ${this.name} немного подросла, теперь мой размер: ${this.size}`);
            return this.size;
        } else {
            console.log(`Ещё не прошло время!`);
            return this.size;
        }
    }

    set addFood(someFood) {
        this.#food.push(someFood);
    }
}

const firstFish = new Fish('Гуппи','Gold', 5, { x: 0, y: 0, z: 0});

console.log(firstFish);
firstFish.move(5, 7, 9);
firstFish.eat('червяк');
firstFish.eat('акула');
firstFish.breatheTheAir();
firstFish.grow();

const smallFish = firstFish.reproduction();
console.log(smallFish);
smallFish.move(25, 25, 25);
smallFish.breatheTheAir();
smallFish.eat('личинка комара');
smallFish.grow();
console.log(smallFish);

const secondFish = new Fish('Молот','Blue', 2, { x: 8, y: 12, z: 1});
console.log(secondFish);
secondFish.move(10, 4, 0);
secondFish.eat('трава');
secondFish.addFood = 'перловка';
secondFish.eat('перловка');
secondFish.breatheTheAir();
secondFish.grow();