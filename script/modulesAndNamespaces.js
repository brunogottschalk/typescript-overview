var AllGreetings;
(function (AllGreetings) {
    let Greetings;
    (function (Greetings) {
        function returnGreeting(greeting) {
            console.log(`The message from namespace Greetings is ${greeting}.`);
        }
        Greetings.returnGreeting = returnGreeting;
    })(Greetings = AllGreetings.Greetings || (AllGreetings.Greetings = {}));
    let GreetingsWithLength;
    (function (GreetingsWithLength_1) {
        function GreetingsWithLength(greeting) {
            let greetingLength = getLength(greeting);
            console.log(`The message from namespace GreetingsWithLenght is ${greeting}. It is ${greetingLength} characters long.`);
        }
        GreetingsWithLength_1.GreetingsWithLength = GreetingsWithLength;
        function getLength(message) {
            return message.length;
        }
    })(GreetingsWithLength = AllGreetings.GreetingsWithLength || (AllGreetings.GreetingsWithLength = {}));
})(AllGreetings || (AllGreetings = {}));
const { Greetings, GreetingsWithLength } = AllGreetings;
Greetings.returnGreeting("Hello there!");
GreetingsWithLength.GreetingsWithLength('Hello there!');
var greet = AllGreetings.Greetings;
