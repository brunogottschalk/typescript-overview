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