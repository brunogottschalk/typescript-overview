let foo = 123;
let text = 'hello there';
let typescriptIsUseful = true;
let firstEmployee = {
    name: 'Bruno',
    age: 20,
    telephoneNumber: 12345789,
    adress: 'Hogwarts',
    occupation: 'Front-end developer',
};
class rectangle {
    constructor(width, height) {
        this.area = () => this.height * this.width;
        this.width = width;
        this.height = height;
    }
}
const square = new rectangle(10, 10);
console.log(`square area: ${square.area()}`);
class triangle extends rectangle {
    constructor(width, height) {
        super(width, height);
        this.area = () => (this.height * this.width) / 2;
        this.hypotenuse = () => Math.pow((Math.pow(this.height, 2) + Math.pow(this.width, 2)), 0.5);
    }
}
const myTriangle = new triangle(3, 4);
console.log(`triangle hipotenuse: ${myTriangle.hypotenuse()} and the triangle area: ${myTriangle.area()}`);
