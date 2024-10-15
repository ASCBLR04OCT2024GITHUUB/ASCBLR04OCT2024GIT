console.log("Hello World!!!");
let message = "Happy learning";
console.log(message);

//create a string variable
let myString: string;
myString = "TypeScript";
console.log(myString);
console.log("***************************")

// npm install -g ts-node
// ts-node index.ts
// what is ts-node?
// ts-node is a package that allows you to run TypeScript code directly without having to compile it to JavaScript first.
// is ts node used in production?
// No, ts-node is not used in production. It is used for development purposes only.
// What is the difference between ts-node and tsc?
// ts-node is used to run TypeScript code directly without having to compile it to JavaScript first, while tsc is used to compile TypeScript code to JavaScript.


console.log("Typescript Features");
// 1. Static Typing
// TypeScript introduces static typing to JavaScript, allowing you to define the types of variables, function parameters, and return values. This helps you catch errors at compile time, rather than at runtime.

function add(a: number, b: number): number {
    return a + b;
}
const result = add(5, 10);
console.log(result); // Output: 15

// 2. Classes and Interfaces
// TypeScript supports classes and interfaces, which allow you to define blueprints for objects and enforce the structure of your code.
// Interfaces define the shape of an object, specifying the types of its properties.

interface User {
    name: string;
    age: number;
    email: string;
}

const user: User = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
};

console.log(user); // Output: { name: 'John Doe', age: 30, email: '

// 3. Classes and Inheritance
// TypeScript supports object-oriented programming with classes and inheritance.
class Animal {

    constructor(public name: string) {}

    makeSound(): void {
        console.log(`${this.name} makes a sound.`);
        // `${this.name} makes a sound.`
        // This is an example of string interpolation in TypeScript. The ${} syntax allows you to embed expressions within a string literal.
    }
}

// `  is used to define a template literal string, which allows you to embed expressions within a string.
class Dog extends Animal {
    makeSound(): void {
        console.log(`${this.name} barks.`);
    }
}

//new keyword is used to create an instance of a class.
const animal = new Animal("Cat");
animal.makeSound(); // Output: Cat makes a sound.
const dog = new Dog("Buddy");
dog.makeSound(); // Output: Buddy barks.    

// 4. Generics
// Generics allow you to create reusable components that work with any data type.
function identity<T>(arg: T): T {
    return arg;
}

const num = identity<number>(42);
const str = identity<string>("Hello");

console.log(num); // Output: 42
console.log(str); // Output: Hello

// 5. Enums
// Enums allow you to define a set of named constants.
enum Direction {
    Up,
    Down,
    Left,
    Right
}

const move = Direction.Up;
console.log(move); // Output: 0
//print the value of the enum
console.log(Direction[move]); // Output: Up
console.log(Direction[1]); // Output: Down

enum Direction1 {
    Up = 1,
    Down,
    Left = 50,
    Right
}
console.log(Direction1.Up); // Output: 1
console.log(Direction1.Down); // Output: 2
console.log(Direction1.Left); // Output: 50
console.log(Direction1.Right); // Output: 51
 

//5. Modules
// Modules in TypeScript allow you to organize your code into reusable units.
// You can export variables, functions, classes, and interfaces from a module using the export keyword.
// You can import these exported members into other modules using the import keyword.
// Modules help you create a clean and modular codebase that is easier to maintain and scale.
// For example, you can create a module that exports utility functions for working with arrays.
// export.ts
// export function sum(a: number, b: number): number {
//     return a + b;
// }
// import.ts

// import { sum } from "./export";
// const result = sum(5, 10);
// console.log(result); // Output: 15

// 6. Type Inference
// TypeScript uses type inference to determine the types of variables based on their values.
// This allows you to write cleaner code without explicitly specifying types.
// For example, TypeScript can infer the type of a variable based on the value assigned to it.
let x = 10; // TypeScript infers the type of x as number
let y = "Hello"; // TypeScript infers the type of y as string