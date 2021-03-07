/* Реализовать две оставшиеся иерархии в виде классов (которые вы не делали в классе).
Придумать для каждого класса по 1-2 уникальных свойств, 1-2 методов
(методы можно не сильно реализовывать, а просто выводить что-то в консоль-лог внутри, чтобы знать,
что он вызвался в какой-то момент)
https://docs.google.com/document/d/1gre7iEn1Iq-rstFlDrltCXxZvxaLlVtA8xtJmhzAjkA/edit?usp=sharing */

class Shape {
    constructor(name) {
        this.name = name;
        this.sizes = true;
    }
}

const shape = new Shape('Shape');
console.log(shape);

class Circle extends Shape {
    constructor(diameter) {
        super('Circle');
        this.diameter = diameter;
    }

    calculateArea() {
        const area = Math.PI * Math.pow(this.diameter, 2) / 4;
        console.log(area);
    }
}

const circle = new Circle(15);
console.log(circle);
circle.calculateArea();

class FilledCircle extends Circle {
    constructor(name, color) {
        super(35);
        this.name = name;
        this.color = color;
    }
}

const filledCircle = new FilledCircle('FilledCircle', 'blue');
console.log(filledCircle);
filledCircle.calculateArea();
filledCircle.color = 'green';
console.log(filledCircle);

class Dot extends FilledCircle {
    constructor() {
        super('Dot', 'yellow');
        this.sizes = false;
        this.diameter = false;
    }

    calculateArea() {
        console.log(false);
        return false;
    }
}

const dot = new Dot();
console.log(dot);
dot.calculateArea();

class Rectangle extends Shape {
    constructor(sizeA, sizeB) {
        super('Rectangle');
        this.sizeA = sizeA;
        this.sizeB = sizeB;
    }

    calculateArea() {
        const area = this.sizeA * this.sizeB;
        console.log(area);
    }

    calculatePerimetr() {
        const perimetr = (this.sizeA + this.sizeB) * 2;
        console.log(perimetr);
    }
}

const rectangle = new Rectangle(4, 5);
console.log(rectangle);
rectangle.calculateArea();
rectangle.calculatePerimetr();

class Polygon extends Shape {
    #diameterCircumscribedCircle = 0;

    constructor(numOfSides) {
        super('Polygon');
        this.numOfSides = numOfSides;
    }

    get diameterCircumscribedCircle() {
        return this.#diameterCircumscribedCircle;
    }

    set diameterCircumscribedCircle(diameter) {
        this.#diameterCircumscribedCircle = diameter;
    }

    calculateArea() {
        console.log('Тут всякие сложные вычисления...');
    }
}

const polygon = new Polygon(6, 25);
console.log(polygon);
polygon.diameterCircumscribedCircle = 12;
console.log(polygon.diameterCircumscribedCircle);

class Square extends Polygon {
    constructor(name, sizeA) {
        super(4);
        this.name = name;
        this.sizeA = sizeA;
    }

    calculateArea() {
        const area = this.sizeA ** 2;
        console.log(area);
    }
}

const square = new Square('Square', 8);
console.log(square);
square.calculateArea();

class FilledPolygone extends Polygon {
    constructor(name, color) {
        super(8);
        this.name = name;
        this.color = color;
    }

    calculateArea() {
        console.log('Тут всякие сложные вычисления...');
    }
}

const filledPolygone = new FilledPolygone('FilledPolygone', 'red');
console.log(filledPolygone);
filledPolygone.calculateArea();