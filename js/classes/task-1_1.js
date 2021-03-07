/* Реализовать две оставшиеся иерархии в виде классов (которые вы не делали в классе).
Придумать для каждого класса по 1-2 уникальных свойств, 1-2 методов
(методы можно не сильно реализовывать, а просто выводить что-то в консоль-лог внутри, чтобы знать,
что он вызвался в какой-то момент)
https://docs.google.com/document/d/1gre7iEn1Iq-rstFlDrltCXxZvxaLlVtA8xtJmhzAjkA/edit?usp=sharing */

class Vehicle {
    constructor(manufacturer) {
        this.engine = true;
        this.manufacturer = manufacturer;
    }

    drive() {
        console.log(`All automobiles can to drive!`);
    }
}

let vehicle = new Vehicle('Global Corparation');
console.log(vehicle);
vehicle.drive();

class Truck extends Vehicle {
    constructor() {
        super('Volvo');
        this.weight = 5;
        this.numPassengers = 2;
    }

    transportLargeLoad() {
        console.log(`All Trucks transport a large load.`);
    }
}

let truck = new Truck();
console.log(truck);
truck.drive();
truck.transportLargeLoad();

class Car extends Vehicle {
    constructor() {
        super('GM');
        this.weight = 2;
        this.numPassengers = 5;
    }

    driveToFast() {
        console.log(`All Cars can drive to fast.`);
    }
}

let car = new Car();
console.log(car);
car.driveToFast();
car.drive();

class Vaz extends Car {
    constructor() {
        super();
        this.manufacturer = 'VAZ';
        this.countryOfProduction  = 'Russian Federation';
    }

    toBuy() {
        console.log('Very affordable car!');
    }
}

const vaz = new Vaz();
console.log(vaz);
vaz.toBuy();

class Vaz_21083 extends Vaz {
    constructor(name, date) {
        super();
        this.name = name;
        this.dateOfProduction = date;
    }

    isManufactured() {
        console.log("I'm manufactured now!");
    }
}

const vaz_21083 = new Vaz_21083('21083', 1984);
console.log(vaz_21083);
vaz_21083.driveToFast();

class Vaz_21099 extends Vaz {
    constructor(name, date) {
        super();
        this.name = name;
        this.dateOfProduction = date;
    }

    isManufactured() {
        console.log("I'm manufactured now!");
    }
}

const vaz_21099 = new Vaz_21099('21099', 1990);
console.log(vaz_21099);
vaz_21083.driveToFast();

class Ford extends Car {
    constructor() {
        super();
        this.manufacturer = 'Ford Company';
        this.countryOfProduction  = 'USA';
    }

    sayAboutSelf() {
        console.log('Very American car!');
    }
}

const ford = new Ford();
console.log(ford);
ford.sayAboutSelf();

class Mondeo extends Ford {
    constructor(name, date) {
        super();
        this.name = name;
        this.dateOfProduction = date;
    }

    isManufactured() {
        console.log("I'm manufactured now!");
    }
}

const mondeo = new Mondeo('Ford Mondeo', 1993);
console.log(mondeo);
mondeo.isManufactured();