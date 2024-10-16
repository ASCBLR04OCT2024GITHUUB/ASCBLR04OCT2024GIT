// 6. Type Inference
// TypeScript uses type inference to determine the types of variables based on their values.
// This allows you to write cleaner code without explicitly specifying types.
// For example, TypeScript can infer the type of a variable based on the value assigned to it.
let x = 10; // TypeScript infers the type of x as number
x = 20; // valid
// x = "Hello"; // Error: Type 'string' is not assignable to type 'number'
let y = "Hello"; // TypeScript infers the type of y as string

// create variable with different types in typescript
let z: number; // TypeScript infers the type of z as number
z = 20; // valid
// z = "Hello"; // Error: Type 'string' is not assignable to type 'number'

// list the types of variables in typescript
let a: number = 10; // number
let b: string = "Hello"; // string
let c: boolean = true; // boolean
let d: any = 10; // any
// any is a special type in TypeScript that allows you to assign any value to a variable, regardless of its type.
let e: any = "Hello"; // any
let f: any = true; // any
let g: number[] = [1, 2, 3]; // number array
let h: string[] = ["Hello", "World"]; // string array
let i: boolean[] = [true, false]; // boolean array
let j: any[] = [1, "Hello", true]; // any array
let k: [string, number] = ["Hello", 10]; // tuple
let l: object = { name: "John", age: 30 ,
    emailIds :
    {
        email:"e@e.com",
    },
    preferences: ["sports", "music"]
}; 
// object
// The object type is a generic type that represents any non-primitive type in TypeScript.
// Print all the values and their data type in the format "value: datatype" 

console.log(`a: ${typeof a}`);
console.log(`b: ${typeof b}`);
console.log(`c: ${typeof c}`);
console.log(`d: ${typeof d}`);
console.log(`e: ${typeof e}`);
console.log(`f: ${typeof f}`);
console.log(`g: ${typeof g}`);
console.log(`h: ${typeof h}`);
console.log(`i: ${typeof i}`);
console.log(`j: ${typeof j}`);
console.log(`k: ${typeof k}`);
console.log(`l: ${typeof l}`);


// print values of all the variables
console.log(`a: ${a}`);
console.log(`b: ${b}`);
console.log(`c: ${c}`);
console.log(`d: ${d}`);
console.log(`e: ${e}`);
console.log(`f: ${f}`);
console.log(`g: ${g}`);
console.log(`h: ${h}`);
console.log(`i: ${i}`);
console.log(`j: ${j}`);
console.log(`k: ${k}`);
console.log(`l: ${l}`);
