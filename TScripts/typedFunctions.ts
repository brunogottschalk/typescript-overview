// two different ways to define the same function
const addNumbers = function (x: number, y: number): number {
  return x + y;
}

const addNumbers2 = (x: number, y: number): number => x + y;
// 
addNumbers(1, 2);
addNumbers2(1, 2);

const sum = (input: number[]): number => input.reduce((prev: number, curr: number) =>  prev + curr);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // his total should be 55

console.log(sum(numbers));

function displayAlert(message: string) {
  console.log(`The message is ${message}`);
}

interface Calculator { // define an interface for a function is useful because the typescript intellisense might help in the documentation and increase the readability of the code.
  (operator: 'sum' | 'sub',
  ...numbers: number[])
}

const calculator: Calculator = (operator: 'sum' | 'sub', ...numbers: number[]): number => operator === 'sum' ? numbers
  .reduce((prev, curr) => prev + curr) : numbers.reduce((prev, curr) => prev - curr);

console.log(calculator('sum', 2, 5, 6, 1, 2, 1));

// that's an example of how can be passed optional arguments without be in order for a created function
interface Message {
  text: string,
  sender?: string,
}

function displayMessage({ text, sender } : Message) : string {
  return (`Message: ${text}, sender: ${sender}`)
}

console.log(displayMessage({ sender: 'Bruno Gottschalk Roque', text: "Hello there, what's going on?" }));
