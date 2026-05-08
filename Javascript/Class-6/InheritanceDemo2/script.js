

class Car{
    static appName = "CarApplicationDemo2"
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    static start() {
        console.log('Starting a car');
    }
}


// super -> super is a reference to a parent class.

class RacingCar extends Car{
    constructor(name, price, topSpeed) {
        super(name, price);
        this.topSpeed = topSpeed;
    }

    static print() {
        // static properties and method can be accessed via `super` and `this` keyword
        console.log(super.appName);
    }

    
    greet() {
        // this -> its points to the object on which it is called.
        // we cannot access static propertis using
        //  - this - since this keyword points to the instance and not the class.
        // - super - accessing static properties are not allowed.
        console.log(Car.appName);
    }
}

const r1 = new RacingCar("BMW", 777, 300);