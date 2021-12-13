function getArray(items: any[]): any[] {
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

// generic type checker <T>. It makes possible to add implicit type checking for structured data variables like array and objects.
// the letter T has no meaning by itself and could be changed for any other letter.
function genericGetArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

const newNumberArray = genericGetArray([5, 10, 15, 20]);
const newStringArray = genericGetArray<string>(['Cats', 'Dogs', 'Birds']); // it's possible to specify what type of return you expect from the function.
newNumberArray.push(25);
// newNumberArray.push('This is not a number!'); // this will raise an error because the number type is setted by the <T>.
// newStringArray.push(25); // same type error happens here.

function identity<T, U> (value: T, message: U): T {
    console.log(message);
    return value;
}

let returnNumber = identity<number, string> (20, 'Hello!');
let returnString = identity<string, string> ('100', 'Olá!');
let returnBoolean = identity<boolean, string> (true, 'Bonjour!');

returnNumber = returnNumber * 100;
// returnString = returnString * 100; // Error: Type 'number' not assignable to type 'string'
// returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'

type ValidTypes = string | number;

function newIdentity<T extends ValidTypes, U>(value: T, message: U) {
    let result: ValidTypes = '';
    let typeValue: string = typeof value;
    
    if (typeof value === 'number') {
        result = value + value;
    } else if (typeof value === 'string') {
        result = value + value;
    }
    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);
    return result;
}

let numberValue = newIdentity<number, string>(100, 'Hello');
let stringValue = newIdentity<string, string>('100', 'Hello');

interface Identity<T extends ValidTypes, U> {
    value: T,
    message: U,
}

let identityReturnNumber: Identity<number, string> = {
    value: 25,
    message: 'Hello',
} 

let identityReturnString: Identity<string, number> = {
    value: 'Hello',
    message: 25,
}

interface ProcessIdentity<T extends ValidTypes, U> {
    (value: T, message: U): T;
}

function processIdentity<T, U> (value: T, message: U): T {
    console.log(message);
    return value;
}

const processor: ProcessIdentity<string, string> = processIdentity; // function type check
const returnString1 = processor('25', 'Hello');

interface ProcessIdentityClass<T, U> {
    value: T,
    message: U,
    process(): T,
}

class processIdentityClass<X, Y> implements ProcessIdentityClass<X, Y> {
    value: X;
    message: Y;
    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }
    process(): X {
        console.log(this.message);
        return this.value;
    }
}

const newProcessor = new processIdentityClass<number, string>(100, 'Hello');
newProcessor.process();
newProcessor.value = 100;
