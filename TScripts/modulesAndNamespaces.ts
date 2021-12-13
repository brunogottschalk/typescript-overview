namespace AllGreetings {
    export namespace Greetings {
        export function returnGreeting(greeting: string) {
            console.log(`The message from namespace Greetings is ${greeting}.`);
        }
    }
    
    export namespace GreetingsWithLength {
        export function GreetingsWithLength(greeting: string) {
            let greetingLength = getLength(greeting);
            console.log(`The message from namespace GreetingsWithLenght is ${greeting}. It is ${greetingLength} characters long.`);
        }
    
        function getLength(message: string): number {
            return message.length;
        }
    }
}

const { Greetings, GreetingsWithLength } = AllGreetings;

Greetings.returnGreeting("Hello there!");
GreetingsWithLength.GreetingsWithLength('Hello there!');

import greet = AllGreetings.Greetings;
