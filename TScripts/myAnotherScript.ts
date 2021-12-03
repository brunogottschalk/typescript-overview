const myAnotherTypescriptFile: string = 'This is my another typescript file';

const anotherTestVariable: string = 'this is my another test variable';

// it's possible to access the variables declared in the script.ts file, because the code is in a global namespace
// as example, the variable foo can be accessed and can have her value changed.
// foo = 234;
// but it isn't a good practice, because allows your code to change things that might not be in your plans
// however, it can be fixed by using a module export in your files defining what'll be exported for the global namespace
// example:
export let myKey: number = 932; // IMPORTANT: if the import or export token are causing troubles to you, try to change the target to es5 in the tsconfig.json file.
// notice that when the module export is used, all the other variables aren't in the global scope anymore
// so i'll need to import everything that it's going to be used for this document using modules
// example:
import { foo } from './script';

console.log(foo);
