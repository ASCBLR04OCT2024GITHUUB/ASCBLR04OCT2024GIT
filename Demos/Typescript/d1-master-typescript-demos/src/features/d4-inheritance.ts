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
    constructor(name: string) {
        super(name);
        console.log("Dog constructor called");
    }
    makeSound(): void {
        console.log(`${this.name} barks.`);
    }
}

//new keyword is used to create an instance of a class.
console.log("***************************")
const animal = new Animal("Cat");
animal.makeSound(); // Output: Cat makes a sound.
const dog = new Dog("Buddy");
dog.makeSound(); // Output: Buddy barks.   