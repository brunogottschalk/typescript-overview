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
function newIdentity(value, message) {
    let result = '';
    let typeValue = typeof value;
    if (typeof value === 'number') {
        result = value + value;
    }
    else if (typeof value === 'string') {
        result = value + value;
    }
    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);
    return result;
}
let numberValue = newIdentity(100, 'Hello');
let stringValue = newIdentity('100', 'Hello');
let identityReturnNumber = {
    value: 25,
    message: 'Hello',
};
let identityReturnString = {
    value: 'Hello',
    message: 25,
};
function processIdentity(value, message) {
    console.log(message);
    return value;
}
const processor = processIdentity;
const returnString1 = processor('25', 'Hello');
class processIdentityClass {
    constructor(val, msg) {
        this.value = val;
        this.message = msg;
    }
    process() {
        console.log(this.message);
        return this.value;
    }
}
const newProcessor = new processIdentityClass(100, 'Hello');
newProcessor.process();
newProcessor.value = 100;
