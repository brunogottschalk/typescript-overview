// declaring a variable of a certain type
export let foo: number = 123;
let text: string = 'hello there';
let typescriptIsUseful: boolean = true;

// if you try to change the value of some variable for a different type, typescript will report you an error:
// foo = '123';  //example

// DEFINING object structures
// we use the property called INTERFACE to define the types of the object's keys to use it later for other objects:
interface form {
  name: string,
  age: number,
  telephoneNumber: number,
  adress: string,
  occupation: string,
}

let firstEmployee: form = { // if the structure doesn't correspond with the interface declared before, typecript will report you an error
  name: 'Bruno',
  age: 20,
  telephoneNumber: 12345789,
  adress: 'Hogwarts',
  occupation: 'Front-end developer', // try to comment this line to see the error with more detail
}

// defining a class with typescript

class rectangle {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height; 
  }

  area = () => this.height * this.width;
}

const square = new rectangle(10, 10);
console.log(`square area: ${square.area()}`);

// classes can be inherit using the extends property in his declaration

class triangle extends rectangle {
  constructor(width: number, height: number) {
    super(width, height);
  }
  area = () => (this.height * this.width) / 2;

  hypotenuse = () => Math.pow((Math.pow(this.height, 2) + Math.pow(this.width, 2)), 0.5);
}

const myTriangle = new triangle(3, 4);

console.log(`triangle hypotenuse: ${myTriangle.hypotenuse()} and the triangle area: ${myTriangle.area()}`)

import { myKey } from './myAnotherScript';

console.log(myKey);
