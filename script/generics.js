function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(['Cats', 'Dogs', 'Birds']);
numberArray.push(25);
stringArray.push('Rabbits');
numberArray.push('This is not a number!');
stringArray.push(30);
console.log(numberArray);
console.log(stringArray);
function genericGetArray(items) {
    return new Array().concat(items);
}
const newNumberArray = genericGetArray([5, 10, 15, 20]);
const newStringArray = genericGetArray(['Cats', 'Dogs', 'Birds']);
newNumberArray.push(25);
function identity(value, message) {
    console.log(message);
    return value;
}
let returnNumber = identity(20, 'Hello!');
let returnString = identity('100', 'Olá!');
let returnBoolean = identity(true, 'Bonjour!');
returnNumber = returnNumber * 100;
