
class Vehicle{

    static appName = "CarApplication"

    constructor(name, price, type) {
        this.name = name;
        this.price = price;
        this.type = type;
    }

    get getName() {
        return this.name;
    }

    get getPrice() {
        return this.price;
    }

    static print() {
        console.log(this.appName);
    }
}


// RacingCar = Child class
// Vehicle = Parent Class
class RacingCar extends Vehicle{
    constructor(name, price, type, topSpeed, isDiscBrake) {
        super(name, price, type);
        this.topSpeed = topSpeed;
        this.isDiscBrake = isDiscBrake;
    }
}

class Bike extends Vehicle{
    constructor(name, price, type, cc, color) {
        super(name, price, type);
        this.cc = cc;
        this.color = color;
    }
}

const r1 = new RacingCar("Ferrari", 999, "CAR", 300, true);

const b1 = new Bike("Kawasaki", 888, "BIKE", 300, 'black');



// ------------------------------- Point -------------

class Point{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distanceBWPoints(p2) {
        const dx = this.x - p2.x;
        const dy = this.y - p2.y;
        return Math.hypot(dx, dy);
    }

    static distance(p1, p2) {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(2, 3);
const p2 = new Point(4, 5);

p1.distanceBWPoints(p2)


