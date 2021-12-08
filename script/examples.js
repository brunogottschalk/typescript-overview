let employee = {
    firstName: "Harry",
    age: 20,
};
console.log(employee);
const nameList = ['Bruno', 'Lucas', 'Maria', 'Jose', 'Joao'];
const printNameList = (...namelist) => namelist.reduce((prev, curr) => prev + ', ' + curr);
console.log(printNameList(...nameList));
const iceCream = {
    flavor: 'Vanilla',
    scoops: 4,
};
console.log(`Favorite ice cream flavor: ${iceCream.flavor}`);
const tooManyScoops = (dessert) => dessert.scoops >= 4 ? `${dessert.scoops} Is too many scoops!` : 'Your order will be ready soon!';
console.log(tooManyScoops(iceCream));
const myNewIceCream = {
    flavor: "Vanilla",
    scoops: 2,
    sauce: "Caramel",
    nuts: true,
};
console.log(tooManyScoops({ flavor: 'Vanilla', scoops: 5, sauce: 'Caramel' }));
const myIceCreamArray = ['Chocolate', 'Vanilla', 'Strawberry'];
const myStr = myIceCreamArray[2];
console.log(myStr);
