interface Vehicle {
    make: string;
    color: string;
    doors: number;
    accelerate(speed: number): string;
    brake(): string;
    turn(direction: 'left' | 'right'): string;
}

class Car implements Vehicle {
    // Properties
    // static properties are shared with all the instances of the class
    private static numberOfCars: number = 0;
    // a private property can only be accessed within the class statement
    private _make: string;
    private _color: string;
    private _doors: number;
    // Constructor
    constructor(make: string, color: string, doors: number = 4) {
        this._make = make;
        this._color = color;
        this._doors = this.doorsVerification(doors);
        Car.numberOfCars+= 1; // Increments the value of the static property
    }
    // Accessors
    get make() {
        return this._make;
    }

    get color() {
        return `The color of the car is ${this._color}`;
    }

    get doors() {
        return this._doors;
    }

    set make(make: string) {
        this._make = make;
    }

    set color(color: string) {
        this._color = color
    }

    set doors(doors: number) {
        this.doorsVerification(doors)
    }
    // Methods
    public getNumberOfCars(): number {
        return Car.numberOfCars;
    }

    doorsVerification(doors: number) { // method used to verify if the number of doors isn't odd
        if (doors % 2 === 0) {
            return this._doors = doors;
        } else {
            throw new Error('Doors must be an even number!');
        }
    }
    // the protected keyword different from private, makes it possible to share the method with the subclasses inherited by Car class
    protected worker(): string { // This function performs work for the other method functions.
        return this._make;
    }

    accelerate(speed: number): string {
        return `${this.worker()} is accelerating to ${speed} MPH.`;
    }

    brake(): string {
        return `${this.worker()} is braking with the standard braking system.`;
    }

    turn(direction: 'left' | 'right'): string {
        return `${this.worker()} is turning ${direction}`;
    }
}

const myCar1 = new Car('Cool car Company', 'blue', 2); // Instantiates the car Object with all parameters.

console.log('parameter accessed by using the set acessor: ',myCar1.color);

const myCar2 = new Car('Galaxy Motors', 'red', 2);

// myCar2.doors = 5; the function doorsVerification throw an error because the number of doors is odd.

const myCar3 = new Car('Galaxy Motors', 'gray'); // Tests the default parameter passed to doors in the signature of the class.
console.log('myCar3 doors: ', myCar3.doors); // returns 4, the default value.

console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn('right'));

console.log('number of cars: ', myCar1.getNumberOfCars());

// extending a class
class ElectricCar extends Car {
    // Properties unique to EletricCar
    private _range: number;
    // Constructor
    constructor(make: string, color: string, range: number, doors: number = 2) {
        super(make, color, doors);
        this._range = range;
    }
    // Accessors
    get range() {
        return this._range;
    }

    set range(range: number) {
        this._range = range + 1;
    }
    // Methods
    charge() {
        console.log(`${this.worker()} is charging.`)
    }

    brake(): string { // overriding a method, need to have the same type of the method declared in Car class.
        return `${this.worker()} is braking with the regenerative braking system.`;
    }
}

const spark = new ElectricCar('Spark Motors', 'silver', 124, 2);
const eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log("eCar's doors: ", eCar.doors);
spark.charge();
console.log(spark.brake());

eCar.range = 52; // accessor "range" has been called

console.log(eCar.range);