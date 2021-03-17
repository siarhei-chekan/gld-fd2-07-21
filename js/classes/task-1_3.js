/* Реализовать две оставшиеся иерархии в виде классов (которые вы не делали в классе).
Придумать для каждого класса по 1-2 уникальных свойств, 1-2 методов
(методы можно не сильно реализовывать, а просто выводить что-то в консоль-лог внутри, чтобы знать,
что он вызвался в какой-то момент)
https://docs.google.com/document/d/1gre7iEn1Iq-rstFlDrltCXxZvxaLlVtA8xtJmhzAjkA/edit?usp=sharing */

class MeansOfTransport {
    constructor() {     
    }

    canMove() {
        console.log(`All transport can to move!`);
    }
}

const meansOfTransport = new MeansOfTransport();
console.log(meansOfTransport);

class RealTransport extends MeansOfTransport {
    constructor() {
        super();
        this.location = 'Real World';
    }
}
const realTransport = new RealTransport();
console.log(realTransport);
realTransport.canMove();

class Air extends RealTransport {
    constructor() {
        super();
        this.engine = true;
        this.wings = true;
        this.tail = true;
    }

    canFly() {
        console.log(`All air transport can to fly!`);
    }
}
const air = new Air();
console.log(air);
air.canFly();

class Helicopters extends Air {
    constructor(numberOfScrews, takeoffWeight) {
        super();
        this.numberOfScrews  = numberOfScrews;
        this.takeoffWeight = takeoffWeight;
    }

    verticalTakeoff() {
        console.log('Вертолёты взлетают вертикально.');
    }
}
const helicopter = new Helicopters(1, 1500);
console.log(helicopter);
helicopter.verticalTakeoff();

class MI8 extends Helicopters {
    constructor(chiefDesigner, dateOfManufacture) {
        super(1, 12000);
        this.chiefDesigner = chiefDesigner;
        this.dateOfManufacture = dateOfManufacture;
        this.maxSpeed = 250;
    }

    flyWithMaxSpeed() {
        console.log(`Может летать с максимальной скоростью ${this.maxSpeed}км/ч.`)
    }
}

const mi8 = new MI8('Миль', 1965);
console.log(mi8);
mi8.flyWithMaxSpeed();

class KA26 extends Helicopters {
    constructor(chiefDesigner, dateOfManufacture) {
        super(2, 700);
        this.chiefDesigner = chiefDesigner;
        this.dateOfManufacture = dateOfManufacture;
        this.maxSpeed = 170;
    }

    flyWithMaxSpeed() {
        console.log(`Может летать с максимальной скоростью ${this.maxSpeed}км/ч.`)
    }
}

const ka26 = new KA26('Камов', 1969);
console.log(ka26);
ka26.flyWithMaxSpeed();

class Aircraft  extends Air {
    constructor(numberOfEngine, takeoffWeight) {
        super();
        this.numberOfEngine  = numberOfEngine;
        this.takeoffWeight = takeoffWeight;
    }

    horizontalTakeoff() {
        console.log('Самолёты взлетают горизонтально.');
    }
}
const aircraft = new Aircraft(4, 5500);
console.log(aircraft);
aircraft.horizontalTakeoff();

class AN24 extends Aircraft {
    constructor(chiefDesigner, dateOfManufacture) {
        super(2, 21000);
        this.chiefDesigner = chiefDesigner;
        this.dateOfManufacture = dateOfManufacture;
        this.maxSpeed = 540;
    }

    flyWithMaxSpeed() {
        console.log(`Может летать с максимальной скоростью ${this.maxSpeed}км/ч.`)
    }
}

const an24 = new AN24('Антонов', 1962);
console.log(an24);
an24.flyWithMaxSpeed();

class IL62 extends Aircraft {
    constructor(chiefDesigner, dateOfManufacture) {
        super(4, 161000);
        this.chiefDesigner = chiefDesigner;
        this.dateOfManufacture = dateOfManufacture;
        this.maxSpeed = 870;
    }

    flyWithMaxSpeed() {
        console.log(`Может летать с максимальной скоростью ${this.maxSpeed}км/ч.`)
    }
}

const il62 = new IL62('Ильюшин', 1967);
console.log(il62);
il62.flyWithMaxSpeed();

class Land extends RealTransport {
    constructor() {
        super();
        this.engine = true;
        this.wheels = true;
    }

    canDrive() {
        console.log(`All land transport can to drive!`);
    }
}
const land = new Land();
console.log(land);
land.canDrive();

class FabulousTransport extends MeansOfTransport {
    constructor() {
        super();
        this.location = 'fairy tales';

    }
}
const fabulousTransport = new FabulousTransport();
console.log(fabulousTransport);
fabulousTransport.canMove();

class LandTransport extends FabulousTransport {
    constructor() {
        super();
        this.wayToTravel = 'on the ground';
    }

    canDrive() {
        console.log(`All land transport can to drive!`);
    }
}
const land1 = new LandTransport();
console.log(land1);
land1.canDrive();

class Bake extends LandTransport {
    constructor() {
        super();
        this.fuelType = 'firewood'; 
    }

    canDrive() {
        console.log(`All land transport can to drive!`);
    }
}
const bake = new Bake();
console.log(bake);
bake.canDrive();

class RunningBoots  extends LandTransport {
    constructor() {
        super();
        this.fuelType = 'muscle'; 
    }

    toShoe() {
        console.log(`Сапоги-скороходы одеваются на ноги!`);
    }
}
const runningBoots  = new RunningBoots();
console.log(runningBoots);
runningBoots.toShoe();

class Airy extends FabulousTransport {
    constructor() {
        super();
        this.wayToTravel = 'on the air';
    }

    canFly() {
        console.log(`All air transport can to fly!`);
    }
}
const airy = new Airy();
console.log(airy);
airy.canFly();

class Mortar extends Airy {
    constructor(driver) {
        super();
        this.driver = driver;
        this.controlMethod = 'метла';
    }

    howToFly() {
        console.log(`Чтобы взлететь нужна ${this.controlMethod}!`);
    }
}
const mortar = new Mortar('Баба-Яга');
console.log(mortar);
mortar.howToFly();

class CarpetPlane extends Airy {
    constructor(driver) {
        super();
        this.driver = driver;
        this.controlMethod = 'волшебное слово';
    }

    howToFly() {
        console.log(`Чтобы взлететь нужно ${this.controlMethod}!`);
    }
}
const carpetPlane = new CarpetPlane('Старик Хоттабыч');
console.log(carpetPlane);
carpetPlane.howToFly();