### TypeScript Guide for Learners

Welcome to the TypeScript guide! This document will introduce you to the  Key Features of TypeScript, including  Syntax, important points, and best practices.

---

## Table of Contents

1. [Introduction to TypeScript](#introduction-to-typescript)
2. [Static Typing](#static-typing)
3. [Interfaces](#interfaces)
4. [Classes and Inheritance](#classes-and-inheritance)
5. [Union and Intersection Types](#union-and-intersection-types)
6. [Type Aliases](#type-aliases)
7. [Type Guards](#type-guards)
8. [Generics](#generics)
9. [Enums](#enums)
10. [Modules](#modules)
11. [Decorators](#decorators)
12. [Best Practices](#best-practices)
---

## Introduction to TypeScript

TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing, classes, and interfaces to JavaScript, making it easier to write and maintain large-scale applications.

### Key Features
- Static Typing
- Interfaces
- Classes and Inheritance
- Union and Intersection Types
- Type Aliases
- Type Guards
- Generics
- Enums
- Modules
- Decorators

---

## Static Typing

Static typing allows you to define the types of variables, function parameters, and return values. This helps catch errors at compile time rather than at runtime.

#### Syntax
```typescript
let myString: string = "Hello, TypeScript!";
let myNumber: number = 42;

function add(a: number, b: number): number {
    return a + b;
}
```
#### Key Points
Type Annotations: Type annotations are optional but recommended for better code clarity.
Type Inference: Type inference automatically assigns types based on the assigned values.
Interfaces
Interfaces define the shape of an object, specifying the types of its properties. They are used to enforce a structure in your code.


## Interfaces
Interfaces define the structure of an object, specifying the types of its properties. They are used to enforce a specific shape in your code. 
```ts
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
```

#### Key Points

Extending Interfaces: Interfaces can be extended using the extends keyword.
Optional Properties: Optional properties can be defined using the ? symbol.

## Classes and Inheritance
TypeScript supports classes and inheritance, allowing you to define blueprints for objects and reuse code through inheritance.


#### Syntax
```ts
// EXPLORING THE CODE BASE
console.log("1  ***************************")
class Phone {
    phoneFeature : string;
    constructor(feature : string){
        console.log("Phone constructor called and feature is initialized");
        this.phoneFeature = feature;
    }
    // constructor(public feature : string){
    //     console.log("Phone constructor called", feature);
    // }
    displayDetails() : void {
        console.log("Phone feature are  " + this.phoneFeature);
    }
}

class SmartPhone extends Phone {
    constructor(public feature : string, public  cameraSpecs : string){
        // super() = base class constructor
        // super (feature) = base class constructor with parameter Phone(feature)
        super(feature);

        console.log("SmartPhone constructor completed");
    }

   displayDetails(): void {
       console.log("SmartPhone feature are  " + this.phoneFeature + " and camera specs are " + this.cameraSpecs);
   }
}
// Instantiate the Phone
// const phone = new Phone("Basic Phone with calling facilities");
// phone.displayDetails();
const phone1 = new SmartPhone("Phone with touch screen, calling, messaging, camera, music player, and internet browsing features","108 mega pixel camera!" );
phone1.displayDetails();

```
#### Key Points
Classes: Classes are blueprints for creating objects. They encapsulate data and behavior.

Constructors: Constructors are special methods used to initialize objects.

Inheritance: Inheritance allows a class to inherit properties and methods from another class using the `extends` keyword.

Super: The `super` keyword is used to call the constructor of the base class.

Method Overriding: Subclasses can override methods of the base class to provide specific implementations.

Encapsulation: Encapsulation is the concept of bundling data and methods that operate on that data within a single unit (class). It restricts direct access to some of the object's components, which can prevent the accidental modification of data.

Polymorphism: Polymorphism allows methods to do different things based on the object it is acting upon, even though they share the same name. In TypeScript, this is often achieved through method overriding.

Abstraction: Abstraction is the concept of hiding the complex implementation details and showing only the necessary features of an object. It helps in reducing programming complexity and effort.

## Union and Intersection Types
Union types allow a variable to hold multiple types, while intersection types combine multiple types into one.

#### Syntax
```ts
// Union Type
let id: string | number;
id = "123";
id = 123;

// Intersection Type
interface Colorful {
    color: string;
}

interface Shape {
    area: number;
}

type ColorfulShape = Colorful & Shape;

const colorfulShape: ColorfulShape = {
    color: "red",
    area: 100
};
```

#### Key Points
Union Types: Union types use the | symbol and are useful when a value can be one of several types. They help in creating flexible and reusable code.
Intersection Types: Intersection types use the & symbol and are useful when you want to combine multiple types into one. They help in creating complex types by merging properties from different types.


## Type Aliases
Type aliases create a new name for an existing type, simplifying complex types or giving meaningful names to types.

#### Syntax
```ts
type ID = string | number;

function printId(id: ID) {
    console.log(id);
}

printId("202");
printId(202);
```
#### Key Points
Type Aliases: Type aliases are defined using the type keyword. They are useful for simplifying complex type definitions and making the code more readable. They can be used to create more meaningful names for types, which can improve code clarity and maintainability.


## Type Guards
Type guards allow you to narrow down the type of a variable within a conditional block.

#### Syntax
```ts
interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

function isCircle(shape: Circle | Square): shape is Circle {
    return (shape as Circle).radius !== undefined;
}

function getArea(shape: Circle | Square): number {
    if (isCircle(shape)) {
        return Math.PI * shape.radius * shape.radius;
    } else {
        return shape.sideLength * shape.sideLength;
    }
}

const myCircle: Circle = { kind: "circle", radius: 10 };
const mySquare: Square = { kind: "square", sideLength: 5 };

console.log(getArea(myCircle));
console.log(getArea(mySquare));
```
#### Key Points
Type Guards: Type guards are defined using the shape is Type 
. They are useful for narrowing down the type of a variable within a conditional block. They help in writing type-safe code by ensuring that the correct type is used in different parts of the code.

## Generics 

#### Syntax
```ts
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("Hello");
let output2 = identity<number>(42);
```
#### Key Points
Generics: Generics are defined using the <T> syntax. They allow you to create reusable components that work with any data type. They provide type safety by ensuring that the correct type is used throughout the code, and they help in writing flexible and reusable code.

## Enums
Enums allow you to define a set of named constants, making your code more readable and maintainable.

#### Syntax
```ts

enum Direction {
    Up,
    Down,
    Left,
    Right
}
let move: Direction = Direction.Up;
```
#### Key Points
Enums: Enums can be numeric or string-based. They are useful for defining a set of named constants that represent a fixed set of values. They help in making the code more readable and maintainable by providing meaningful names for values.

## Modules
Modules allow you to organize your code into separate files and import/export functionality between them.

#### Syntax
```ts
// math.ts
export function add(a: number, b: number): number {
    return a + b;
}

// main.ts
import { add } from './math';

console.log(add(2, 3));
```
#### Key Points
Modules: Modules are defined using the export keyword to export functions, classes, or variables, and the import keyword to import them in another file. They are useful for organizing code into separate files and managing dependencies between them. They help in writing modular and maintainable code by allowing you to import and export functionality between different parts of the codebase.

## Decorators
Decorators are a special kind of declaration that can be attached to a class, method, accessor, property, or parameter.

#### Syntax
```ts
function log(target: any, key: string) {
    console.log(`${key} was called`);
}

class Calculator {
    @log
    add(a: number, b: number): number {
        return a + b;
    }
}

const calculator = new Calculator();
calculator.add(2, 3);
```    
#### Key Points
Decorators: Decorators are experimental and require enabling in tsconfig.json. They are defined using the @ symbol and can be attached to a class, method, accessor, property, or parameter. They are a powerful feature that allows you to add metadata and behavior to classes, methods, accessors, properties, or parameters. They help in writing clean and maintainable code by separating concerns and adding functionality in a declarative way.

## Best Practices
Use Type Annotations: Always use type annotations for function parameters and return types.
Prefer Interfaces over Type Aliases: Use interfaces for object types and type aliases for other types.
Enable Strict Mode: Enable strict mode in tsconfig.json for better type checking.
Use Readonly: Use readonly for properties that should not be modified.
Avoid Using any: Avoid using the any type as it defeats the purpose of TypeScript.
Example tsconfig.json
```ts
{
    "compilerOptions": {
        "target": "ES6",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
    }
}
```
This guide provides an overview of the Key Features of TypeScript, along with Syntax
examples and important points. By following these best practices, you can write clean, maintainable, and type-safe code in TypeScript. Happy coding!

