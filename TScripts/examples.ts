// this file has the objective to write the examples of the microsoft official guide for typescript.
// interface definition
interface Employee {
  firstName: string,
  lastName?: string, // the "?" defines an optional object key that don't need to be necessarily in definition of the object
}

interface EmployeeAge {
  age: 20 | 16,
}

let employee: Employee & EmployeeAge = {
  firstName: "Harry",
  //  lastName: "Potter",
  age: 20,
}

console.log(employee);

const nameList: string[] = ['Bruno', 'Lucas', 'Maria', 'Jose', 'Joao'];

const printNameList = (...namelist: string[]) => namelist.reduce((prev, curr) => prev + ', ' + curr);

console.log(printNameList(...nameList));

interface IceCream {
  flavor: string,
  scoops: number,
  instructions?: string,
}

const iceCream: IceCream = {
  flavor: 'Vanilla',
  scoops: 4,
}

// extend an Interface
interface Sundae extends IceCream {
  sauce: "Chocolate" | "Caramel" | "Strawberry";
  nuts?: boolean,
  whippedCream?: boolean,
  instructions?: string,
}

console.log(`Favorite ice cream flavor: ${iceCream.flavor}`);

const tooManyScoops = (dessert: Sundae | IceCream) => dessert.scoops >= 4 ? `${dessert.scoops} Is too many scoops!` : 'Your order will be ready soon!';

console.log(tooManyScoops(iceCream));

const myNewIceCream: Sundae = {
  flavor: "Vanilla",
  scoops: 2,
  sauce: "Caramel",
  nuts: true,
}

console.log(tooManyScoops({ flavor: 'Vanilla', scoops: 5, sauce: 'Caramel' }));

interface IceCreamArray {
  [index: number]: string,
}

const myIceCreamArray: IceCreamArray = ['Chocolate', 'Vanilla', 'Strawberry'];

const myStr: string = myIceCreamArray[2];

console.log(myStr);
