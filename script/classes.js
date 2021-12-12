class Car {
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        this._doors = this.doorsVerification(doors);
        Car.numberOfCars += 1;
    }
    get make() {
        return this._make;
    }
    get color() {
        return `The color of the car is ${this._color}`;
    }
    get doors() {
        return this._doors;
    }
    set make(make) {
        this._make = make;
    }
    set color(color) {
        this._color = color;
    }
    set doors(doors) {
        this.doorsVerification(doors);
    }
    getNumberOfCars() {
        return Car.numberOfCars;
    }
    doorsVerification(doors) {
        if (doors % 2 === 0) {
            return this._doors = doors;
        }
        else {
            throw new Error('Doors must be an even number!');
        }
    }
    worker() {
        return this._make;
    }
    accelerate(speed) {
        return `${this.worker()} is accelerating to ${speed} MPH.`;
    }
    brake() {
        return `${this.worker()} is braking with the standard braking system.`;
    }
    turn(direction) {
        return `${this.worker()} is turning ${direction}`;
    }
}
Car.numberOfCars = 0;
const myCar1 = new Car('Cool car Company', 'blue', 2);
console.log('parameter accessed by using the set acessor: ', myCar1.color);
const myCar2 = new Car('Galaxy Motors', 'red', 2);
const myCar3 = new Car('Galaxy Motors', 'gray');
console.log('myCar3 doors: ', myCar3.doors);
console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn('right'));
console.log('number of cars: ', myCar1.getNumberOfCars());
class ElectricCar extends Car {
    constructor(make, color, range, doors = 2) {
        super(make, color, doors);
        this._range = range;
    }
    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range + 1;
    }
    charge() {
        console.log(`${this.worker()} is charging.`);
    }
    brake() {
        return `${this.worker()} is braking with the regenerative braking system.`;
    }
}
const spark = new ElectricCar('Spark Motors', 'silver', 124, 2);
const eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log("eCar's doors: ", eCar.doors);
spark.charge();
console.log(spark.brake());
eCar.range = 52;
console.log(eCar.range);
