const addNumbers = function (x, y) {
    return x + y;
};
const addNumbers2 = (x, y) => x + y;
addNumbers(1, 2);
addNumbers2(1, 2);
const sum = (input) => input.reduce((prev, curr) => prev + curr);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sum(numbers));
function displayAlert(message) {
    console.log(`The message is ${message}`);
}
const calculator = (operator, ...numbers) => operator === 'sum' ? numbers
    .reduce((prev, curr) => prev + curr) : numbers.reduce((prev, curr) => prev - curr);
console.log(calculator('sum', 2, 5, 6, 1, 2, 1));
function displayMessage({ text, sender }) {
    return (`Message: ${text}, sender: ${sender}`);
}
console.log(displayMessage({ sender: 'Bruno Gottschalk Roque', text: "Hello there" }));
